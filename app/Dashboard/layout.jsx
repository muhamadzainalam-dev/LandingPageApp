import RootProvider from "@/components/dashboard_components/RootProvider";
import "./globals.css";

export const metadata = {
  title: "Invocea | Dashboard",
  description: "Your Invoicing Solution",
};

export default function RootLayout({ children }) {
  return (
    <RootProvider>
      {children}
    </RootProvider>
  );
}
