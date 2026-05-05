// src/app/(legal)/terms/page.tsx
import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Adya Artistry website and services.',
};

export default function TermsPage() {
  return (
    <>
      <h1>Terms of Service</h1>
      <p className="text-neutral-600">
        <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </p>

      <h2>Agreement to Terms</h2>
      <p>
        By accessing or using {SITE_CONFIG.name} ("we," "our," or "us"), you agree to be
        bound by these Terms of Service. If you disagree with any part of these terms,
        you may not access our website or services.
      </p>

      <h2>Use of Service</h2>
      <p>
        You may use our website for lawful purposes only. You agree not to:
      </p>
      <ul>
        <li>Violate any applicable laws or regulations</li>
        <li>Infringe on intellectual property rights</li>
        <li>Transmit harmful or malicious content</li>
        <li>Attempt to gain unauthorized access to our systems</li>
      </ul>

      <h2>Products and Services</h2>
      <p>
        All products are handmade and may have slight variations. Product images are
        representative and actual items may differ slightly. We make every effort to display
        colors accurately, but we cannot guarantee that your device displays colors accurately.
      </p>

      <h2>Custom Orders</h2>
      <p>
        Custom orders require approval before production. Once approved, custom orders cannot
        be canceled or refunded unless there is a defect in craftsmanship. Custom orders
        typically take 7-14 business days to complete.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        All content on this website, including text, images, logos, and designs, is the
        property of {SITE_CONFIG.name} or its licensors. You may not reproduce, distribute,
        or use any content without prior written permission.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, {SITE_CONFIG.name} shall not be liable for
        any indirect, incidental, special, or consequential damages arising from your use
        of our website or products.
      </p>

      <h2>Shipping and Delivery</h2>
      <p>
        Shipping times are estimates and not guaranteed. We are not responsible for delays
        caused by shipping carriers. Risk of loss passes to you upon delivery to the carrier.
      </p>

      <h2>Returns and Refunds</h2>
      <p>
        Due to the handmade nature of our products, we generally do not accept returns unless
        the item arrives damaged or defective. Please contact us within 7 days of receipt
        with photos of any issues.
      </p>

      <h2>Changes to Terms</h2>
      <p>
        We reserve the right to modify these Terms of Service at any time. Changes will be
        effective immediately upon posting. Your continued use of the website constitutes
        acceptance of the updated terms.
      </p>

      <h2>Governing Law</h2>
      <p>
        These Terms of Service shall be governed by and construed in accordance with the
        laws of the jurisdiction in which {SITE_CONFIG.name} operates.
      </p>

      <h2>Contact Information</h2>
      <p>
        For questions about these Terms of Service, please contact us at{' '}
        <a href={`mailto:${SITE_CONFIG.links.email}`}>{SITE_CONFIG.links.email}</a>.
      </p>
    </>
  );
}
