import { League_Spartan } from "next/font/google";
import "./globals.css";
const league = League_Spartan({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-league",
});
export const metadata = {
  title: "Dine Restuarant",
  description: "Exquisite dining since 1989",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${league.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
