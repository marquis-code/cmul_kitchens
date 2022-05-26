import '../styles/globals.css';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import { Provider } from 'react-redux';
import store from '../redux/store';

const MyApp = ({Component, pageProps}) => {
  return (
     <>
     <Head>
       <title>Cmul Foods - Home Page</title>
       <meta name='description' content='Best food ordering app in the college of medicine university of lagos' />
       <link rel='icon' href='/favicon.ico' />
     </Head>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
      </Provider>
     </>
  )
}

export default MyApp;