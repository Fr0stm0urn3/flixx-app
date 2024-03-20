import "@/assets/styles/globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Flixx Movie App | Home",
  description: "Flixx - Watch TV Shows Online, Watch Movies Online",
  keywords: "movies, tv shows, series, action, netflix",
}

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      </body>
    </html>
  )
}

export default MainLayout
