import "./globals.css";
import NavBar from "@/components/custom/NavBar";
import Footer from "@/components/custom/Footer";

export const metadata = {
  title: "Invocea | Your Invoicing Solution",
  description: "Your Invoicing Solution",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
