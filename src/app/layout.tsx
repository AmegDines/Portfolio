import './globals.css';

export const metadata = {
  title: 'Ameg Dines | Portfolio',
  description: 'Portfolio of Ameg Dines, Data Science Engineer & Tech Enthusiast',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
