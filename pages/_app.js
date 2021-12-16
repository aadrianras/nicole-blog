import Layout from '../components/layout/Layout';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/globals.css';
import 'animate.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
