// Importing modules
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import Footer from "@/components/footer/Footer";
import { Inter } from "next/font/google";
import "./_global.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Social Media App',
  description: 'Social Media App By Daniel Chiquete',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {/* children is the page.js(x) file within the folder,
        which in this case, is the app folder's page.jsx */}
        {children}
      </body>
    </html>
  )
}

