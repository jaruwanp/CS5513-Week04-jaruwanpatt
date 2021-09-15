// bring in Head component
import Head from 'next/head';
// bring in bootstrap css with responsive css media queries
import '../styles/bootstrap.min.css';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://code.jquery.com/jquery-3.6.0.slim.min.js"
  integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI="
  crossorigin="anonymous">
  </script>
 <script src="../js/jquery-3.5.1.slim.min.js"></script> 
<script src="../js/bootstrap.min.js"></script> 
  <script src="https://use.fontawesome.com/574387ee49.js"></script> 

      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
