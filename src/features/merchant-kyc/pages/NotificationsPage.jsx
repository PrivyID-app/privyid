import React, { useState, useEffect } from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import NotificationsContent from "../../../shared/components/NotificationsContent";
import { supabase } from "../../../shared/services/supabase";

const NotificationsPage = () => {
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
  }, []);

  return (
    <div className="content_wrapper">
      <PageHeader
        title="Notifications"
        description="Stay updated with your verification alerts and system messages"
        notificationIconRoute={
          merchantId ? `/m/${merchantId}/kyc/notifications` : null
        }
      />
      <div className="content_area">
        <NotificationsContent />
      </div>
    </div>
  );
};

export default NotificationsPage;
