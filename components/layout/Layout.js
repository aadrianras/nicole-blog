import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";


const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}

export default Layout;