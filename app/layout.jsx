import "./globals.css";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

export const metadata = {
  title: "ZennyTrack | Your Invoicing Solution",
  description: "Your Invoicing Solution",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <SmoothCursor />
      <html lang="en">
        <body>{children}</body>
      </html>
    </div>
  );
}
