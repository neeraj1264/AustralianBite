import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Layout from './Layout';
import Banner from './components/banner/Banner';
import Pizza from './components/Pages/Pizza/Pizza';
import Cart from './components/shoppingCart/Cart';
import Address from './components/shippingAddress/Address';
import ConfirmOrder from './components/confirm/ConfirmOrder';
import MyCarousel from './components/banner/Banner';
import MenuLayout from './MenuLayout';
import AddToHomeModal from './components/AddToHome/AddToHome';
import { useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';
import GoogleMap from './components/map/GoogleMap';
import Feedback from './components/ContactUs/Contact';
import About from './components/about/About';
import Team from './components/team/Team';

function App() {
  const location = useLocation();

  const [installPrompt, setInstallPrompt] = useState(null);
  const [Loading, SetLoading] = useState(true)

  useEffect(() => {
   setTimeout(() => {
    SetLoading(false)
   }, 1000);
  }, []);

  const handleInstallClick = () => {
    if (installPrompt instanceof Event) {
      const installEvent = installPrompt;
      installEvent.prompt();
      installEvent.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        setInstallPrompt(null);
      });
    }
  };

  const handleCloseClick = () => {
    setInstallPrompt(null);
  };

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setInstallPrompt(event);
    };

    const handleClickOutsidePopup = (event) => {
      // Check if the clicked element is not inside the install popup
      if (!event.target.closest('.install-popup')) {
        setInstallPrompt(null);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    document.addEventListener('click', handleClickOutsidePopup);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      document.removeEventListener('click', handleClickOutsidePopup);
    };
  }, []);

  useEffect(() => {
    // Scroll to top whenever the route changes
    window.scrollTo(0, 0);
  }, [location]);

  // Get the current route
  const currentRoute = window.location.pathname;

  return (
   <>
        {Loading ?(
        <div className="lds-ripple"><div></div><div></div></div>
        )  : (
 <Routes>
    <Route path="" element={<Layout />}>
      <Route index element={<MyCarousel/>} />
      <Route path="about" element={<About />} />
      <Route path="feedback" element={<Feedback />} />
      <Route path="address" element={<GoogleMap />} />
      {/* <Route path="Pasta" element={<Pasta />} />
      <Route path="Pizza" element={<Pizza />} />
      <Route path="Burger" element={<Burger />} /> */}
      <Route path="cart" element={<Cart />} />
      <Route path="team" element={<Team />} />
      <Route path="menu" element={<MenuLayout/>} />
      <Route path="MyCarousel" element={<MyCarousel />} />
    </Route>
  </Routes>  
    )}
  {installPrompt && currentRoute === '/' && (
        <AddToHomeModal
        installPrompt={installPrompt}
        onInstallClick={handleInstallClick}
        onCloseClick={handleCloseClick}
        />
      )}
      
   </>
  )
}
export default App
