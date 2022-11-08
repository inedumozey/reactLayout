import react, { useState, useEffect } from 'react';
import Pages from './pages';
import Layout from './layouts';

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
    <Layout>
      <Pages />
    </Layout>
  )
}

export default App;
