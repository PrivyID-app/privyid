import React, { useState, useEffect } from "react";
import { supabase } from "../../../shared/services/supabase";
import PageHeader from "../../../components/PageHeader/PageHeader";
import SupportContent from "../../../shared/components/SupportContent";

const SupportPage = () => {
  const [merchantId, setMerchantId] = useState(null);
  const [viewingAsMerchant] = useState(
    localStorage.getItem("admin_viewing_merchant_id"),
  );

  useEffect(() => {
    const getMerchantId = async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (userData?.user) {
        setMerchantId(viewingAsMerchant || userData.user.id);
      }
    };
    getMerchantId();
  }, [viewingAsMerchant]);
  return (
    <div className="content_wrapper">
      <PageHeader
        title="Support Center"
        description="Get help with your KYC/KYB integration and operations"
        notificationIconRoute={
          merchantId ? `/m/${merchantId}/combined/notifications` : null
        }
      />
      <div className="content_area">
        <SupportContent />
      </div>
    </div>
  );
};

export default SupportPage;
