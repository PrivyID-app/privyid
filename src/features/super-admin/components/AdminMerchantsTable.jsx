import { supabase } from "../../../shared/services/supabase";
import { useNavigate } from "react-router-dom";
import { useGlobal } from "../../../app/GlobalContext";

const AdminMerchantsTable = () => {
  const navigate = useNavigate();
  const { showToast } = useGlobal();
  const [merchants, setMerchants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchMerchants();
  }, []);

  const fetchMerchants = async () => {
    setLoading(true);
    try {
      // First get all merchants
      const { data: merchantsData, error: mError } = await supabase.from(
        "merchants",
      ).select(`
          *,
          business_details (
            business_name,
            registration_number
          )
        `);

      if (mError) throw mError;

      // Map to table structure
      const mapped = merchantsData.map((m) => ({
        id: m.id,
        businessName: m.business_details?.[0]?.business_name || m.email,
        businessType: m.company_type || "N/A",
        status: m.onboarding_step === "completed" ? "active" : "pending",
        serviceType: m.service_type,
        verifications: "0", // Need verification count join eventually
        revenue: "₦0",
        joinDate: new Date(m.created_at).toLocaleDateString(),
      }));

      setMerchants(mapped);
    } catch (error) {
      showToast(error.message || "Failed to fetch merchants.", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleViewDashboard = (merchant) => {
    // Store viewing merchant ID for the dashboard to pick up
    localStorage.setItem("admin_viewing_merchant_id", merchant.id);

    const serviceMap = {
      kyc: "/merchant-kyc",
      kyb: "/merchant-kyb",
      combined: "/merchant-combined",
    };

    navigate(serviceMap[merchant.serviceType] || "/merchant-combined");
  };

  const totalPages = Math.ceil(merchants.length / itemsPerPage);
  const paginatedMerchants = merchants.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleSelectAll = () => {
    const allMerchantIds = paginatedMerchants.map((m) => m.id);
    if (
      selectedRows.length === allMerchantIds.length &&
      selectedRows.every((id) => allMerchantIds.includes(id))
    ) {
      setSelectedRows([]);
    } else {
      setSelectedRows(allMerchantIds);
    }
  };

  const handleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id],
    );
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "active":
        return "approved";
      case "inactive":
        return "pending";
      case "suspended":
        return "rejected";
      default:
        return "";
    }
  };

  const getStatusLabel = (status) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div className="merchant_table">
      <div className="table_header">
        <div className="cell checkbox_cell">
          <ImageCheckbox
            checked={
              selectedRows.length === paginatedMerchants.length &&
              paginatedMerchants.every((merchant) =>
                selectedRows.includes(merchant.id),
              )
            }
            onChange={handleSelectAll}
          />
        </div>
        <div className="cell">
          <p>Merchant ID</p>
        </div>
        <div className="cell">
          <p>Business Name</p>
        </div>
        <div className="cell">
          <p>Business Type</p>
        </div>
        <div className="cell">
          <p>Status</p>
        </div>
        <div className="cell">
          <p>Verifications</p>
        </div>
        <div className="cell">
          <p>Revenue</p>
        </div>
        <div className="cell">
          <p>Join Date</p>
        </div>
        <div className="cell action_cell">
          <p>Action</p>
        </div>
      </div>

      <div className="table_body">
        {paginatedMerchants.map((merchant) => (
          <div key={merchant.id} className="table_row">
            <div className="cell checkbox_cell">
              <ImageCheckbox
                checked={selectedRows.includes(merchant.id)}
                onChange={() => handleSelectRow(merchant.id)}
              />
            </div>
            <div className="cell">
              <p>{merchant.id}</p>
            </div>
            <div className="cell">
              <p>{merchant.businessName}</p>
            </div>
            <div className="cell">
              <p>{merchant.businessType}</p>
            </div>
            <div className="cell">
              <p className={`status ${getStatusClass(merchant.status)}`}>
                {getStatusLabel(merchant.status)}
              </p>
            </div>
            <div className="cell">
              <p>{merchant.verifications}</p>
            </div>
            <div className="cell">
              <p>{merchant.revenue}</p>
            </div>
            <div className="cell">
              <p>{merchant.joinDate}</p>
            </div>
            <div className="cell action_cell">
              <button
                className="action_button"
                onClick={() => handleViewDashboard(merchant)}
                title="View Merchant Dashboard"
              >
                <span className="material-symbols-outlined">visibility</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        onPageSelect={setCurrentPage}
      />
    </div>
  );
};

export default AdminMerchantsTable;
