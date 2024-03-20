import Link from "next/link"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="logo">
          <span>FLIXX</span>
        </div>
        <div className="social-links">
          <Link href="https://www.facebook.com" target="_blank">
            <FaFacebook />
          </Link>
          <Link href="https://www.twitter.com" target="_blank">
            <FaTwitter />
          </Link>
          <Link href="https://www.instagram.com" target="_blank">
            <FaInstagram />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
