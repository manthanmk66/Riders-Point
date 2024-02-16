
import Contact from "./Contact";
import Home from "./Home";
import Services from "./Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Error from "./Error";
import GoToTop from "./components/GoToTop";
import Events from "./Events";
import Register from "./Register";
import Privateroute from "./Privateroute";
import Login from "./Login";
import AddRide from "./pages/AddRide";
import ScheduledRide from "./pages/ScheduledRide";
import Rides from "./Rides";
import Ride from "./pages/Ride";
import RideStatus from "./pages/RideStatus";

const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #000",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GoToTop />
     
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rides" element={<Rides/>} />
          <Route path="/service" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addride" element={<AddRide/>} />
          <Route path="/scheduledride" element={<ScheduledRide/>} />
          <Route path="/scheduledride" element={<ScheduledRide/>} />
          <Route path="/ridestatus" element={<RideStatus/>} />


          {/* <Route path="/user" element={<Privateroute />} >

          

          </Route> */}

          <Route path="/events" element={<Events />} />
          <Route path="/register" element={<Register />} />


          <Route path="*" element={<Error />} />


          
        </Routes>

        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;


