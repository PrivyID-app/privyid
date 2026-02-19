import { supabase } from "../../../shared/services/supabase";
import { useGlobal } from "../../../app/GlobalContext";

const VerifyEmailStep = ({ onNext }) => {
  const { showToast } = useGlobal();
  const { kycOptions } = useOnboarding();
  const [code, setCode] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const inputs = useRef([]);

  React.useEffect(() => {
    if (kycOptions?.email) {
      generateCode();
    }
  }, [kycOptions?.email]);

  const generateCode = async () => {
    const newCode = Math.floor(1000 + Math.random() * 9000).toString();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000).toISOString();

    const { error } = await supabase
      .from("verification_codes")
      .insert([
        { email: kycOptions.email, code: newCode, expires_at: expiresAt },
      ]);

    if (error) {
      showToast("Error preparing verification code.", "error");
    } else {
      // Simulation of email sending
      console.log(
        `[SIMULATION] Email to ${kycOptions.email}: Your PrivyID verification code is ${newCode}`,
      );
      showToast("Verification code generated!", "success");
    }
  };

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value.slice(-1);
    setCode(newCode);

    if (value && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredCode = code.join("");
    if (enteredCode.length !== 4) return;

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("verification_codes")
        .select("*")
        .eq("email", kycOptions.email)
        .eq("code", enteredCode)
        .gt("expires_at", new Date().toISOString())
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (error || !data) {
        showToast("Invalid or expired code.", "error");
        return;
      }

      // Success -> Create Merchant Record
      const { data: userData } = await supabase.auth.getUser();
      if (userData?.user) {
        const { error: merchantError } = await supabase
          .from("merchants")
          .upsert([
            {
              id: userData.user.id,
              email: kycOptions.email,
              onboarding_step: "welcome",
            },
          ]);

        if (merchantError) throw merchantError;
      }

      showToast("Email verified successfully!", "success");
      onNext();
    } catch (error) {
      showToast(error.message || "Verification failed.", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = () => {
    generateCode();
  };

  return (
    <>
      <div className="login_header">
        <div className="custom_icon">
          <div className="key_icon">
            <img src={mailCheckFill} alt="user Icon" />
          </div>
        </div>

        <div className="login_title">
          <p className="login_title_text_bg">Enter Verification Code</p>
          <p className="login_title_text_sm">
            We sent a verification code to{" "}
            <span id="user_email_display">
              {kycOptions?.email || "[EMAIL_ADDRESS]"}
            </span>
          </p>
        </div>
      </div>

      <form className="verify_form" onSubmit={handleSubmit}>
        <div className="input_code_group">
          {code.map((digit, idx) => (
            <div key={idx} className="input_wrapper">
              <input
                ref={(el) => (inputs.current[idx] = el)}
                className="input_code"
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(idx, e.target.value)}
                onKeyDown={(e) => handleKeyDown(idx, e)}
                pattern="[0-9]*"
                inputMode="numeric"
                required
              />
            </div>
          ))}
        </div>

        <button className="login_button" type="submit" disabled={loading}>
          {loading ? "Verifying..." : "Submit Code"}
        </button>
      </form>

      <div className="login_footer">
        <p className="login_footer_text_sm Terms">
          Experiencing issues receiving the code?
          <a
            className="resend_code_link"
            onClick={handleResend}
            style={{ cursor: "pointer" }}
          >
            <p className="login_footer_text_sm Terms">Resend Code</p>
          </a>
        </p>
      </div>
    </>
  );
};

export default VerifyEmailStep;
