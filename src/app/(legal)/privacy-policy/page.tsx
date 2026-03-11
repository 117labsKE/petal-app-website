import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Petal",
  description: "Privacy Policy for the Petal App",
};

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 text-foreground">
      <h1 className="mb-4 text-4xl font-medium tracking-tight sm:text-5xl">PETAL APP PRIVACY POLICY</h1>
      <p className="mb-8 font-semibold">Last Updated: March 2026</p>

      <div className="space-y-6 text-sm leading-relaxed sm:text-base">
        <p>
          Welcome to Petal (&quot;App&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;). Your privacy is deeply important to us. Because we handle highly sensitive health and personal data regarding your menstrual cycle and general wellness, we have built Petal with a privacy-first approach.
        </p>
        <p>
          This Privacy Policy explains what information we collect, how we use it, how we secure it, and your rights concerning that data. By using Petal, you consent to the practices described in this Privacy Policy.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">1. Information We Collect</h2>
        
        <h3 className="mt-6 mb-3 text-xl font-medium">A. Information You Provide Directly</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Account Information:</strong> When you sign up, we collect your email address, name, and profile details to create and authenticate your account using Firebase Authentication.</li>
          <li><strong>Health and Cycle Data:</strong> You may manually log sensitive information including your period start and end dates, flow intensity, symptoms, mood, cycle length, contraceptive usage, and other health-related notes.</li>
          <li><strong>Voice Data:</strong> If you use our voice transcription feature, your audio input is processed to transcribe spoken words into text for logging purposes or chatting with our AI assistant (&quot;Ask Petal&quot;).</li>
          <li><strong>Partner Information:</strong> If you choose to use the Partner Dashboard, you may invite a partner to track your cycle phase. This involves sharing limited information (such as your current phase) with the registered partner account.</li>
        </ul>

        <h3 className="mt-6 mb-3 text-xl font-medium">B. Automatically Collected Information</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Analytics and Usage Data:</strong> We use PostHog to gather anonymized, non-personally identifiable product usage data to understand how you interact with Petal and improve its features.</li>
          <li><strong>Device Information:</strong> We collect basic device information, app version, and operating system data (e.g., iOS version) for crash reporting, bug fixing, and push notifications via Expo.</li>
        </ul>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">2. How We Use Your Information</h2>
        <p>We use the information we collect strictly to provide and improve the Petal app experience:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>To Provide Core Features:</strong> Your cycle data is used to generate phase predictions, ovulation estimates, and personalized health insights.</li>
          <li><strong>To Power AI Features:</strong> Health queries and voice transcriptions you submit to &quot;Ask Petal&quot; are processed to provide context-aware, helpful responses. We work with trusted APIs and do not use your personal identifiable data to train public AI models.</li>
          <li><strong>To Enable Partner Features:</strong> If authorized by you, we display broad phase and mood metrics to your linked partner. Detailed logs remain strictly private to you.</li>
          <li><strong>To Communicate With You:</strong> For sending crucial cycle-related push notifications (if opted-in), account updates, or support responses.</li>
          <li><strong>For Product Improvement:</strong> Anonymized analytics help us understand which features are most useful and where bugs arise.</li>
        </ul>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">3. Data Storage and Security</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Cloud Infrastructure:</strong> Your personal and health data is securely stored on Google&quot;s Firebase Firestore databases. Our databases utilize strict Firestore Security Rules to ensure that your data is only accessible to you (and explicitly shared data to your authorized partner).</li>
          <li><strong>Encryption:</strong> Data is encrypted in transit using SSL/TLS and encrypted at rest by Google Cloud.</li>
          <li><strong>Anonymization:</strong> For analytics tracking in PostHog, we implement controls to separate your deeply personal health identifiers from generalized usage metrics.</li>
        </ul>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">4. How We Share Your Data</h2>
        <p className="font-semibold">We do not and will not sell your personal or sensitive health data to third-party advertisers or data brokers.</p>
        <p>We only share data in the following restricted circumstances:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Service Providers:</strong> We share necessary data with trusted third-party services that host our infrastructure (Google Firebase), provide analytics (PostHog), or power our AI capabilities. These providers are bound by strict data processing agreements.</li>
          <li><strong>Authorized Partners:</strong> If you explicitly opt into the Partner Dashboard, your selected partner will have access to the specific data (e.g., current cycle phase, supportive tips) you consent to share.</li>
          <li><strong>Legal Compliance:</strong> We may disclose information if required to do so by a legal obligation, valid court order, or government request, though we will seek to protect your health records to the fullest extent permitted by law.</li>
        </ul>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">5. Your Rights and Choices</h2>
        <p>We believe you should have total control over your health data.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Data Export:</strong> You have the right to request an export of all the personal and health data Petal holds about you. You can do this directly from the Profile screen in the app.</li>
          <li><strong>Data Deletion:</strong> You can delete your entire account and all associated health data directly from the app (Profile &gt; Delete Account). Upon confirmation, your data is irrevocably removed from our active databases.</li>
          <li><strong>Opt-Out of Analytics:</strong> While analytics greatly help us improve Petal, you may opt-out of secondary usage tracking within the app settings.</li>
          <li><strong>Notification Controls:</strong> You control whether Petal can send you push notifications via your iOS system settings.</li>
          <li><strong>Microphone Access:</strong> Voice transcription requires explicit microphone permissions, which you can revoke at any time via your iOS settings.</li>
        </ul>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">6. Children&quot;s Privacy</h2>
        <p>
          Petal is not intended for use by children under the age of 13 (or under 16 in certain jurisdictions such as the EU/EEA, unless parental consent is given). We do not knowingly collect personal information from children without appropriate verified consent. If you believe we have inadvertently collected such information, please contact us so we can delete it immediately.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">7. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy periodically. If we make material changes, particularly concerning how we handle your health data, we will notify you within the Petal app or via email before the changes take effect.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">8. Contact Us</h2>
        <p>If you have any questions, concerns, or requests regarding your data and privacy, please contact our support team at:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Email:</strong> privacy@petalapp.com</li>
          <li><strong>Website:</strong> https://petalapp.com</li>
        </ul>
      </div>
    </div>
  );
}
