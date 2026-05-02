import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chandru Dental Clinic – Advanced Dental Center',
  description: 'Premium dental care with advanced technology and painless treatment.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
