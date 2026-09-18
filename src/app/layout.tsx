import React from 'react';

export const metadata = {
  title: 'MOVO - Lokalne Dostawy',
  description: 'Aplikacja do zamawiania dostaw i usług w Namysłowie',
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
