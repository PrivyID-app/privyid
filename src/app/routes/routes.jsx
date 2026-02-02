import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OnboardingFlow from "../../features/onboarding/OnboardingFlow";
import NotFound from "../../shared/components/NotFound";

// Merchant KYC Imports
import MerchantKycLayout from "../../features/merchant-kyc/layouts/MerchantKycLayout";
import KycDashboard from "../../features/merchant-kyc/pages/DashboardOverview";
import KycSingle from "../../features/merchant-kyc/pages/SingleVerification";
import KycBatch from "../../features/merchant-kyc/pages/BatchVerification";
import KycHistory from "../../features/merchant-kyc/pages/History";
import KycApi from "../../features/merchant-kyc/pages/ApiPage";
import KycTokens from "../../features/merchant-kyc/pages/TokensPage";
import KycSettings from "../../features/merchant-kyc/pages/SettingsPage";
import KycSupport from "../../features/merchant-kyc/pages/SupportPage";
import KycProfile from "../../features/merchant-kyc/pages/UserProfile";
import KycNotifications from "../../features/merchant-kyc/pages/Notifications";

// Merchant KYB Imports
import MerchantKybLayout from "../../features/merchant-kyb/layouts/MerchantKybLayout";
import KybDashboard from "../../features/merchant-kyb/pages/DashboardOverview";
import KybSingle from "../../features/merchant-kyb/pages/SingleVerification";
import KybBatch from "../../features/merchant-kyb/pages/BatchVerification";
import KybHistory from "../../features/merchant-kyb/pages/History";
import KybApi from "../../features/merchant-kyb/pages/ApiPage";
import KybTokens from "../../features/merchant-kyb/pages/TokensPage";
import KybSettings from "../../features/merchant-kyb/pages/SettingsPage";
import KybSupport from "../../features/merchant-kyb/pages/SupportPage";
import KybProfile from "../../features/merchant-kyb/pages/UserProfile";
import KybNotifications from "../../features/merchant-kyb/pages/Notifications";

// Merchant Combined Imports
import MerchantCombinedLayout from "../../features/merchant-combined/layouts/MerchantCombinedLayout";
import CombinedDashboard from "../../features/merchant-combined/pages/DashboardOverview";
import CombinedSingle from "../../features/merchant-combined/pages/SingleVerification";
import CombinedBatch from "../../features/merchant-combined/pages/BatchVerification";
import CombinedSingleBusiness from "../../features/merchant-combined/pages/SingleBusiness";
import CombinedBatchBusiness from "../../features/merchant-combined/pages/BatchBusiness";
import CombinedHistory from "../../features/merchant-combined/pages/History";
import CombinedApi from "../../features/merchant-combined/pages/ApiPage";
import CombinedTokens from "../../features/merchant-combined/pages/TokensPage";
import CombinedSettings from "../../features/merchant-combined/pages/SettingsPage";
import CombinedSupport from "../../features/merchant-combined/pages/SupportPage";

// Super Admin Imports
import SuperAdminLayout from "../../features/super-admin/layouts/SuperAdminLayout";
import SuperAdminLoginPage from "../../features/super-admin/pages/SuperAdminLoginPage";
import AdminDashboard from "../../features/super-admin/pages/DashboardOverview";
import AdminMerchants from "../../features/super-admin/pages/MerchantsPage";
import AdminVerifications from "../../features/super-admin/pages/VerificationsPage";
import AdminAnalytics from "../../features/super-admin/pages/AnalyticsPage";
import AdminApi from "../../features/super-admin/pages/ApiPage";
import AdminAuditLogs from "../../features/super-admin/pages/AuditLogsPage";
import AdminSettings from "../../features/super-admin/pages/SettingsPage";
import AdminSupport from "../../features/super-admin/pages/SupportPage";

/**
 * Main application routes
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <OnboardingFlow />, // Default entry point
    errorElement: <NotFound />,
  },

  // Merchant KYC Routes
  {
    path: "/merchant-kyc",
    element: <MerchantKycLayout />,
    children: [
      { index: true, element: <KycDashboard /> },
      { path: "single-verification", element: <KycSingle /> },
      { path: "batch-verification", element: <KycBatch /> },
      { path: "history", element: <KycHistory /> },
      { path: "api", element: <KycApi /> },
      { path: "tokens", element: <KycTokens /> },
      { path: "settings", element: <KycSettings /> },
      { path: "support", element: <KycSupport /> },
      { path: "user-profile", element: <KycProfile /> },
      { path: "notifications", element: <KycNotifications /> },
    ],
  },

  // Merchant KYB Routes
  {
    path: "/merchant-kyb",
    element: <MerchantKybLayout />,
    children: [
      { index: true, element: <KybDashboard /> },
      { path: "single-verification", element: <KybSingle /> },
      { path: "batch-verification", element: <KybBatch /> },
      { path: "history", element: <KybHistory /> },
      { path: "api", element: <KybApi /> },
      { path: "tokens", element: <KybTokens /> },
      { path: "settings", element: <KybSettings /> },
      { path: "support", element: <KybSupport /> },
      { path: "user-profile", element: <KybProfile /> },
      { path: "notifications", element: <KybNotifications /> },
    ],
  },

  // Merchant Combined Routes
  {
    path: "/merchant-combined",
    element: <MerchantCombinedLayout />,
    children: [
      { index: true, element: <CombinedDashboard /> },
      { path: "single-verification", element: <CombinedSingle /> },
      { path: "batch-verification", element: <CombinedBatch /> },
      { path: "single-business", element: <CombinedSingleBusiness /> },
      { path: "batch-business", element: <CombinedBatchBusiness /> },
      { path: "history", element: <CombinedHistory /> },
      { path: "api", element: <CombinedApi /> },
      { path: "tokens", element: <CombinedTokens /> },
      { path: "settings", element: <CombinedSettings /> },
      { path: "support", element: <CombinedSupport /> },
    ],
  },

  // Super Admin Routes
  {
    path: "/super-admin/login",
    element: <SuperAdminLoginPage />,
  },
  {
    path: "/super-admin",
    element: <SuperAdminLayout />,
    children: [
      { index: true, element: <AdminDashboard /> },
      { path: "merchants", element: <AdminMerchants /> },
      { path: "verifications", element: <AdminVerifications /> },
      { path: "analytics", element: <AdminAnalytics /> },
      { path: "api", element: <AdminApi /> },
      { path: "audit-logs", element: <AdminAuditLogs /> },
      { path: "settings", element: <AdminSettings /> },
      { path: "support", element: <AdminSupport /> },
    ],
  },

  {
    path: "/marketing",
    element: <div>Marketing Page Placeholder</div>,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
