import { supabase } from "../../../../shared/services/supabase";
import { useGlobal } from "../../../../app/GlobalContext";
import Modal from "../../../../shared/components/Modal";
import CustomSelect from "../../../../shared/components/CustomSelect";

const UserSettings = () => {
  const { showToast } = useGlobal();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Viewer",
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData?.user) return;

      const { data, error } = await supabase
        .from("merchant_users")
        .select("*")
        .eq("merchant_id", userData.user.id)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setUsers(data || []);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData?.user) throw new Error("Not logged in");

      const { error } = await supabase.from("merchant_users").insert([
        {
          merchant_id: userData.user.id,
          name: formData.name,
          email: formData.email,
          role: formData.role,
          status: "pending",
        },
      ]);

      if (error) throw error;

      showToast("Invitation sent successfully!", "success");
      setIsModalOpen(false);
      setFormData({ name: "", email: "", role: "Viewer" });
      fetchUsers();
    } catch (error) {
      showToast(error.message || "Failed to add user.", "error");
    } finally {
      setSubmitting(false);
    }
  };

  const roleOptions = [
    { label: "Admin", value: "Admin" },
    { label: "Manager", value: "Manager" },
    { label: "Viewer", value: "Viewer" },
  ];

  return (
    <div className="settings_section">
      <h2 className="section_title">User Management</h2>
      <p className="section_description">
        Manage users and their roles within your organization.
      </p>

      <button
        className="primary_btn"
        style={{ marginBottom: "24px", gap: "8px" }}
        onClick={() => setIsModalOpen(true)}
      >
        <span className="material-symbols-outlined">add</span>
        Add New User
      </button>

      {loading ? (
        <p>Loading users...</p>
      ) : (
        <div className="user_list">
          {users.length === 0 && (
            <p className="hint_text">No team members added yet.</p>
          )}
          {users.map((user) => (
            <div key={user.id} className="user_item">
              <div className="user_avatar">
                {user.name?.charAt(0) || user.email.charAt(0)}
              </div>
              <div className="user_info">
                <div className="user_name">
                  {user.name || "Pending Registration"}
                </div>
                <div className="user_email">{user.email}</div>
              </div>
              <div className="user_role">{user.role}</div>
              <div className={`status_pill ${user.status}`}>{user.status}</div>
              <button className="upload_btn" style={{ padding: "4px 8px" }}>
                Edit
              </button>
            </div>
          ))}
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Invite New User"
      >
        <form onSubmit={handleAddUser} className="modal_form">
          <div className="input_group">
            <label className="input_label">Full Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="e.g. Jane Doe"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input_group">
            <label className="input_label">Email Address</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="jane@company.com"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input_group">
            <label className="input_label">Role</label>
            <CustomSelect
              options={roleOptions}
              value={formData.role}
              onSelect={(val) =>
                setFormData((prev) => ({ ...prev, role: val }))
              }
              className="service_selector_custom"
            />
          </div>
          <div
            className="modal_actions"
            style={{ marginTop: "24px", display: "flex", gap: "12px" }}
          >
            <button
              type="button"
              className="secondary_button"
              onClick={() => setIsModalOpen(false)}
              style={{ flex: 1 }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="primary_button"
              disabled={submitting}
              style={{ flex: 1 }}
            >
              {submitting ? "Sending..." : "Send Invite"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default UserSettings;
