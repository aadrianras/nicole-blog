import Layout from '../components/layout/Layout';
import { DefaultSeo } from 'next-seo';
import SEO from '../config/next-seo.config';

import "react-responsive-carousel/lib/styles/carousel.min.css";
// import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
import '../styles/globals.css';
import 'animate.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp;
