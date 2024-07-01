import Coedify from "../_components/coedify-official/page";
import Navbar from "../_common/Navbar/Navbar";
import './globals.css'
import Footer from "../_common/Footer/Footer";

export default function Home() {

  return (
    <div className='page'>
      <Navbar/>
      <Coedify/>  
      <Footer/>
    </div>
  );
}
