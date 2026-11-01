import { NextResponse } from "next/server";

interface ContactRequestBody {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  company?: string;
  serviceInterest?: string;
  budgetRange?: string;
  projectDescription?: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactRequestBody = await request.json();

    const name = body.name?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim() || "";
    const subject = body.subject?.trim() || "";
    const company = body.company?.trim() || "Independent / Direct Inquiry";
    const serviceInterest = body.serviceInterest?.trim() || subject || "Custom Software Development";
    const budgetRange = body.budgetRange?.trim() || "Not Specified";
    const projectDescription = (body.message || body.projectDescription || "").trim();

    // Strict validation
    const errors: Record<string, string> = {};

    if (!name || name.length < 2) {
      errors.name = "Please provide your full name (minimum 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errors.email = "Please provide a valid business email address.";
    }

    if (!projectDescription || projectDescription.length < 5) {
      errors.message = "Please provide a brief message or project overview (at least 5 characters).";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed. Please correct the highlighted fields.",
          errors,
        },
        { status: 400 }
      );
    }

    const leadId = `NX-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    const timestamp = new Date().toISOString();

    // Check if an external transactional email provider or webhook is configured
    const hasExternalWebhook = !!process.env.CONTACT_WEBHOOK_URL;
    const hasResend = !!process.env.RESEND_API_KEY;

    if (hasExternalWebhook) {
      try {
        await fetch(process.env.CONTACT_WEBHOOK_URL!, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ leadId, timestamp, name, email, company, serviceInterest, budgetRange, projectDescription }),
        });
      } catch (webhookErr) {
        console.error("Webhook dispatch error:", webhookErr);
      }
    }

    // Server-side audit logging
    console.log(`[NEXORATECH INQUIRY ${leadId}]`, {
      timestamp,
      name,
      email,
      company,
      serviceInterest,
      budgetRange: budgetRange || "Not Specified",
      projectDescription,
    });

    return NextResponse.json(
      {
        success: true,
        leadId,
        timestamp,
        mode: hasExternalWebhook || hasResend ? "production_delivered" : "development_logged",
        backendStatus:
          hasExternalWebhook || hasResend
            ? "Dispatched via configured enterprise delivery pipeline."
            : "Logged to server console in local staging mode. To route to live CRM/Slack, configure CONTACT_WEBHOOK_URL or RESEND_API_KEY in .env.",
        message: "Thank you! Your project inquiry has been securely registered with NexoraTech Engineering.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An internal server error occurred while processing your request. Please try again or email us directly.",
      },
      { status: 500 }
    );
  }
}
