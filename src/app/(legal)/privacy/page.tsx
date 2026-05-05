// src/app/(legal)/privacy/page.tsx
import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Adya Artistry website and services.',
};

export default function PrivacyPage() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p className="text-neutral-600">
        <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </p>

      <h2>Introduction</h2>
      <p>
        {SITE_CONFIG.name} ("we," "our," or "us") respects your privacy and is committed
        to protecting your personal information. This Privacy Policy explains how we collect,
        use, and safeguard your data when you visit our website.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We may collect the following types of information:
      </p>
      <ul>
        <li>
          <strong>Personal Information:</strong> Name, email address, and any other information
          you provide when contacting us or subscribing to our newsletter.
        </li>
        <li>
          <strong>Usage Data:</strong> Information about how you interact with our website,
          including IP address, browser type, and pages visited.
        </li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>
        We use your information to:
      </p>
      <ul>
        <li>Respond to your inquiries and provide customer support</li>
        <li>Send newsletters and marketing communications (with your consent)</li>
        <li>Improve our website and services</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>Data Security</h2>
      <p>
        We implement appropriate technical and organizational measures to protect your personal
        information. However, no method of transmission over the internet is 100% secure.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        We may use third-party services (such as payment processors or email marketing platforms)
        that collect and process your data. These services have their own privacy policies.
      </p>

      <h2>Your Rights</h2>
      <p>
        You have the right to:
      </p>
      <ul>
        <li>Access the personal information we hold about you</li>
        <li>Request correction of inaccurate data</li>
        <li>Request deletion of your data</li>
        <li>Opt out of marketing communications</li>
      </ul>

      <h2>Cookies</h2>
      <p>
        Our website may use cookies to enhance your browsing experience. You can control
        cookie settings through your browser preferences.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of any
        significant changes by posting the new policy on this page.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at{' '}
        <a href={`mailto:${SITE_CONFIG.links.email}`}>{SITE_CONFIG.links.email}</a>.
      </p>
    </>
  );
}
