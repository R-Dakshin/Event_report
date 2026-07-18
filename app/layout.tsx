import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VIT Chennai Event Portal',
  description: 'Secure event, OD, and pre-event management portal'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
