import React from 'react';

export const metadata = {
  title: 'MOVO - Lokalne Dostawy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
