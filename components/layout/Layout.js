import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";


const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout;