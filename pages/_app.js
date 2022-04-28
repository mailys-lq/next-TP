import '../styles/globals.css'
import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import axios from 'axios';

function MyApp({ Component, pageProps }) {




  return (
  <>
      <Component {...pageProps} />
  </>
  )
}

export default MyApp
