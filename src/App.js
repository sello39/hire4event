import Navbar from './Components/NavBar/NavBar';
import IntroSection from './Components/IntroSection/IntroSection';
import EquipmentSection from './Components/EquipmentSection/EquipmentSection';
import ContactSection from './Components/ContactSection/ContactSection';
import Footer from './Components/Footer/Footer';
// import Alerts from './Alerts';

function App() {

  return (
    <>
      <Navbar /> 
      <IntroSection />
      <EquipmentSection />
      <ContactSection />
      <Footer /> 
      {/* <Alerts />  */}
     </>
  );
}

export default App;
