import "@/assets/styles/globals.css"

export const metadata = {
  title: "Flixx Movie App | Home",
  description: "Flixx - Watch TV Shows Online, Watch Movies Online",
  keywords: "movies, tv shows, series, action, netflix",
}

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <>{children}</>
      </body>
    </html>
  )
}

export default MainLayout
