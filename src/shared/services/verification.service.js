import { supabase } from "./supabase";
import { DemoVerificationService } from "./demoProtocol.service";

/**
 * VerificationService
 *
 * Centralized service for handling all verification processes (KYC, KYB, Combined).
 * Supporting both "Demo Simulation" and "Real-World" integration hooks.
 */

const IS_DEMO_MODE = true; // Set to false when connecting to real providers like Persona

export const VerificationService = {
  /**
   * Processes a single verification (KYC or KYB)
   * @param {Object} params { merchant_id, customer_name, customer_email, type, verification_type, metadata }
   */
  async processSingleVerification(params) {
    console.log(
      `[VerificationService] Processing ${params.verification_type} for:`,
      params.customer_name,
    );

    let result = {
      status: "approved",
      report_data: {},
      error: null,
    };

    if (IS_DEMO_MODE) {
      // 1. Simulate API Latency
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // 2. Randomize result (90% success rate for demo)
      const isSuccess = Math.random() > 0.1;
      result.status = isSuccess ? "approved" : "rejected";

      // 3. Fetch mock data from DemoProtocol for the report display
      const mockIdentity = await DemoVerificationService.fetchMockIdentity();
      result.report_data = {
        ...mockIdentity,
        verified_at: new Date().toISOString(),
        provider: "PrivyID Demo Engine",
      };
    } else {
      // HOOK: Integrate with service providers like Persona here
      // const personaResult = await Persona.verify(params);
      // result.status = personaResult.status;
    }

    // 4. Persistence (Best Effort for Demo)
    try {
      const { error: dbError } = await supabase.from("verifications").insert([
        {
          merchant_id: params.merchant_id,
          customer_name: params.customer_name,
          customer_email: params.customer_email,
          status: result.status,
          verification_type: params.verification_type,
          type: params.type,
          source: "single",
          metadata: {
            ...params.metadata,
            ...result.report_data,
          },
        },
      ]);

      if (dbError) {
        console.warn(
          "[VerificationService] Database logging failed (Demo Mode continuing):",
          dbError.message,
        );
        // We don't throw here in Demo Mode to allow the presentation to continue if the DB is acting up
        if (!IS_DEMO_MODE) throw dbError;
      }
    } catch (e) {
      console.error("[VerificationService] Persistence Error:", e);
    }

    return result;
  },
};
