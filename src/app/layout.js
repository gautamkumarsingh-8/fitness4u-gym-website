import "./globals.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import HeroSlider from "./components/common/HeroSlider";

export const metadata = {
  title: "Fitness4U Club Buxar ",
  description: "Fitness4U Club Buxar - Your Fitness Journey Starts Here",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body>
        <Header />
        <HeroSlider />
        {children}
        <Footer />
      </body>
    </html>
  );
}
