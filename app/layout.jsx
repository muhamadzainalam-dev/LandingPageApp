import "./globals.css";

export const metadata = {
  title: "ZennyTrack | Your Invoicing Solution",
  description: "Your Invoicing Solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
