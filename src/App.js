import react, { useState, useEffect } from 'react';
import Pages from './pages';
import Layout from './layouts';
import { Context, state } from './context/Context';


function App() {
  const preloader = document.getElementById('preloader')


  // page preloader
  useEffect(() => {
    preloader.style.opacity = '.4'
    setTimeout(() => {
      preloader.style.display = 'none'
    }, 500)
  })

  return (
    <Context.Provider value={state}>
      <Layout>
        <Pages />
      </Layout>
    </Context.Provider>
  )
}

export default App;
