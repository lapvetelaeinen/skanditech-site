import "./globals.css";
import { Inter, Rubik, Lato } from "next/font/google";
import NavBar from "./_components/navbar";
import NavContextProvider from "@/context/NavContextProvider";
import NavDrawer from "./_components/NavDrawer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" });
const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata = {
  title: "Skanditech - Målinriktad webbutveckling",
  description:
    "Webbutveckling fokuserad på företags specifika mål och utmaningar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${rubik.variable} ${lato.className} bg-eggshell`}
      >
        <>
          <div className="absolute z-50 w-full">
            <NavContextProvider>
              <NavDrawer />
              <NavBar />
            </NavContextProvider>
          </div>

          {children}
        </>
      </body>
    </html>
  );
}
