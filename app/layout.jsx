import "./globals.css";

export const metadata = {
  title: "Invocea | Your Invoicing Solution",
  description: "Your Invoicing Solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
