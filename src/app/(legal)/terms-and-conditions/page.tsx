import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions - Petal",
  description: "Terms and Conditions for the Petal App",
};

export default function TermsAndConditions() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 text-foreground">
      <h1 className="mb-4 text-4xl font-medium tracking-tight sm:text-5xl">PETAL APP TERMS AND CONDITIONS</h1>
      <p className="mb-8 font-semibold">Last Updated: March 2026</p>

      <div className="space-y-6 text-sm leading-relaxed sm:text-base">
        <p>
          Welcome to Petal! These Terms and Conditions (&quot;Terms&quot;) govern your use of the Petal mobile application (&quot;App&quot;), website, and associated services (collectively, the &quot;Services&quot;) provided by Petal (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
        </p>
        <p>
          By creating an account or accessing our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not use the App.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">1. Medical Disclaimer – NOT MEDICAL ADVICE</h2>
        <p className="font-semibold">PETAL IS NOT A DOCTOR OR MEDICAL DEVICE.</p>
        <p>The App tracks menstrual cycles, symptoms, and provides AI-generated insights (&quot;Ask Petal&quot;). The content, data, insights, estimations (like fertile windows or period predictions), and any AI responses are for <strong>informational and educational purposes only</strong>.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Petal is <strong>NOT</strong> a diagnostic tool, medical advice, or a substitute for professional healthcare.</li>
          <li>Petal is <strong>NOT</strong> intended to be used as a method of contraception/birth control, nor should it be relied upon to prevent pregnancy or facilitate conception for medical reasons.</li>
          <li>Always consult a qualified healthcare provider for medical advice, diagnoses, or treatment, particularly if you experience abnormal symptoms or have concerns about your reproductive health. Never disregard professional medical advice or delay seeking it because of something you have read on the App.</li>
        </ul>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">2. User Accounts and Security</h2>
        <p>To access most features of Petal, you must create an account using a valid email address via Firebase Authentication.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Account Security:</strong> You are responsible for maintaining the confidentiality of your login credentials. You agree to notify us immediately of any unauthorized use of your account.</li>
          <li><strong>Accurate Information:</strong> You agree to provide accurate and complete information when registering and using the app, to ensure the predictions and insights provided remain as relevant as possible.</li>
        </ul>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">3. Partner Mode Considerations</h2>
        <p>If you utilize the &quot;Partner Dashboard,&quot; you authorize Petal to share specific, limited aspects of your cycle (such as your current phase and mood) with a designated partner account.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>You remain in full control and may revoke this access at any time through your Profile settings.</li>
          <li>Partners accessing the dashboard agree to treat this shared information with respect and confidentiality, understanding that it is sensitive health data.</li>
        </ul>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">4. &quot;Ask Petal&quot; AI Feature</h2>
        <p>The App includes an AI-powered assistant designed to answer wellness and cycle-related questions based on available data.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>You acknowledge that AI is an evolving technology. Responses provided by &quot;Ask Petal&quot; may contain errors or inaccuracies.</li>
          <li>You agree not to use &quot;Ask Petal&quot; in emergency medical situations. <strong>If you have a medical emergency, call your doctor or emergency services immediately.</strong></li>
          <li>Voice transcriptions utilized to interact with &quot;Ask Petal&quot; are processed solely for generating your query and are subject to our Privacy Policy.</li>
        </ul>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">5. Privacy and Data Ownership</h2>
        <p>
          Your privacy is paramount. Both you and Petal are bound by the terms outlined in our Privacy Policy, which details exactly how we collect, use, and protect your data. You maintain ownership of the personal health data you input, and you may request its export or complete deletion at any time via the App settings.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">6. Prohibited Conduct</h2>
        <p>When using Petal, you agree NOT to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use the App for any illegal or unauthorized purpose.</li>
          <li>Attempt to hack, reverse-engineer, decompile, or interfere with the App&quot;s proper functioning, secure cloud storage, or Firebase data rules.</li>
          <li>Submit false, abusive, or malicious prompts to the AI assistant.</li>
          <li>Use the App in a way that infringes on the privacy or security of others.</li>
        </ul>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">7. Intellectual Property</h2>
        <p>
          All content, visual interfaces, interactive features, design aesthetics (including our distinctive UIColors and typography), computer code, and software in the App are strictly owned by us or our licensors. You are granted a limited, personal, non-transferable, non-exclusive license to use the App for personal, non-commercial purposes.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">8. Limitation of Liability</h2>
        <p className="uppercase">
          TO THE FULLEST EXTENT PERMITTED BY LAW, PETAL, ITS FOUNDERS, EMPLOYEES, AND PARTNERS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Your use of or inability to use the App.</li>
          <li>Any reliance placed on the information, predictions, or AI suggestions provided by the App.</li>
          <li>Unauthorized access to your data, due to user negligence or factors beyond our reasonable security controls.</li>
        </ul>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">9. Modifications to the App and Terms</h2>
        <p>
          We reserve the right to modify or discontinue the App (or any part thereof) with or without notice. We also reserve the right to revise these Terms from time to time. We will provide notification of significant changes within the App. By continuing to use the Services after revisions become effective, you agree to the revised Terms.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">10. Governing Law</h2>
        <p>
          These terms shall be governed by and construed in accordance with the laws of your applicable jurisdiction, without regard to its conflict of law provisions.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">11. Contact Information</h2>
        <p>For any questions regarding these Terms, please contact us at:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Email:</strong> legal@petalapp.com</li>
          <li><strong>Website:</strong> https://petalapp.com</li>
        </ul>
      </div>
    </div>
  );
}
