import { useState, useEffect } from 'react';
import Pages from './pages';
import { useLocation } from "react-router-dom";
import Layout from './layouts';
import { Context, state } from './context/Context';
import Cookies from "js-cookie";
import fetchConfig from './utils/fetchConfig';


function App() {
  const preloader = document.getElementById('preloader')
  const [preloading, setPreloading] = useState(true);
  const location = useLocation()


  // page preloader
  useEffect(() => {
    // preloader.style.opacity = '.4'
    setTimeout(() => {
      preloader.style.display = 'none'
      setPreloading(false)
    }, 500);

    // remove username or email's for resending verify email link from cookies
    Cookies.remove("access")

    // fetch website configurations
    fetchConfig()
  })

  return (
    preloading ? "" :
      <Context.Provider value={state}>
        <Layout>
          <Pages />
        </Layout>
      </Context.Provider>
  )
}

export default App;
