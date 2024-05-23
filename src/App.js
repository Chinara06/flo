import "./styles/style.scss"
import {Routes,Route} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import Tracking from "./pages/Tracking/Tracking";
import Pregnant from "./pages/Pregnant/Pregnant";
import Pregnancy from "./pages/ Pregnancy/Pregnancy";
import Partners from "./pages/Partners/Partners";
import Help from "./pages/Help/Help";
import About from "./pages/About/About";
import Medical from "./pages/Madical/Medical";
import Try from "./pages/Try/Try";
import Research from "./pages/Research/Research";
import Press from "./pages/Press/Press";
import Cycle from "./pages/Cycle/Cycle";
import Health from "./pages/Health/Health";
import Getting from "./pages/Getting/Getting";
import Being from "./pages/Being/Being";
import Calculators from "./pages/Calculators/Calculators";
import PregnancyTwo from "./pages/PregnancyTwo/PregnancyTwo";
import Library from "./pages/Library/Library";
import Experts from "./pages/Experts/Experts";
import More from "./pages/More/More";
import See from "./pages/See/See";
import OneMore from "./pages/OneMore/OneMore";
import Ovulation from "./pages/Ovulation/Ovulation";
function App() {
    return(
        <Routes>
            <Route path={""} element={<Layout/>}>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/tracking"} element={<Tracking/>}/>
            <Route path={"/pregnant"} element={<Pregnant/>}/>
            <Route path={"/pregnancy"} element={<Pregnancy/>}/>
            <Route path={"/partners"} element={<Partners/>}/>
            <Route path={"/help"} element={<Help/>}/>
            <Route path={"/about"} element={<About/>}/>
            <Route path={"/medical"} element={<Medical/>}/>
            <Route path={"/try"} element={<Try/>}/>
            <Route path={"/research"} element={<Research/>}/>
            <Route path={"/press"} element={<Press/>}/>
            <Route path={"/cycle"} element={<Cycle/>}/>
            <Route path={"/library"} element={<Library/>}/>
            <Route path={"/health"} element={<Health/>}/>
            <Route path={"/getting"} element={<Getting/>}/>
            <Route path={"/pregnancyTwo/"} element={<PregnancyTwo/>}/>
            <Route path={"/being"} element={<Being/>}/>
            <Route path={"/calculators"} element={<Calculators/>}/>
            <Route path={"/experts/:id"} element={<Experts/>}/>
            <Route path={"/more"} element={<More/>}/>
            <Route path={"/see"} element={<See/>}/>
            <Route path={"/oneMore/:id"} element={<OneMore/>}/>
            <Route path={"/ovulation"} element={<Ovulation/>}/>
            </Route>
        </Routes>

  );
}

export default App;
