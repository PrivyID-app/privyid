/**
 * DemoVerificationService
 *
 * Provides mock and real-world API data for application demonstrations.
 * Integrates with RandomUser.me (KYC) and OpenCorporates (KYB placeholder).
 */

const DEMO_CONFIG = {
  RANDOM_USER_URL: "https://randomuser.me/api/",
  OPEN_CORPORATES_URL: "https://api.opencorporates.com/v0.4/companies/search",
};

export const DemoVerificationService = {
  /**
   * Simulates fetching KYC profile data
   * @returns {Promise<Object>} Formatted user profile
   */
  async fetchMockIdentity() {
    try {
      const response = await fetch(DEMO_CONFIG.RANDOM_USER_URL);
      const data = await response.json();
      const user = data.results[0];

      return {
        fullName: `${user.name.first} ${user.name.last}`,
        email: user.email,
        dob: user.dob.date.split("T")[0],
        address: `${user.location.street.number} ${user.location.street.name}, ${user.location.city}`,
        nationality: user.nat,
        idNumber: user.login.uuid.substring(0, 10).toUpperCase(),
        photo: user.picture.large,
      };
    } catch (error) {
      console.error("Demo KYC Fetch Error:", error);
      return null;
    }
  },

  /**
   * Simulates searching for real company business details
   * @param {string} query Business name to search
   */
  async searchBusiness(query) {
    if (!query) return [];

    try {
      // Note: In a real demo, you'd add your OpenCorporates API key here
      const response = await fetch(
        `${DEMO_CONFIG.OPEN_CORPORATES_URL}?q=${encodeURIComponent(query)}`,
      );
      const data = await response.json();

      return (data.results.companies || []).map((item) => ({
        name: item.company.name,
        regNumber: item.company.company_number,
        jurisdiction: item.company.jurisdiction_code,
        status: item.company.current_status,
      }));
    } catch (error) {
      console.error("Demo KYB Search Error:", error);
      return [];
    }
  },
};
