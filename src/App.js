import "./styles/style.scss"
import {Routes,Route} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import Tracking from "./pages/Tracking/Tracking";
import Pregnant from "./pages/Pregnant/Pregnant";
import Pregnancy from "./pages/ Pregnancy/Pregnancy";
import Help from "./pages/Help/Help";
import About from "./pages/About/About";
import Medical from "./pages/Madical/Medical";
import Try from "./pages/Try/Try";
import Research from "./pages/Research/Research";
import Press from "./pages/Press/Press";
import Calculators from "./pages/Calculators/Calculators";
import Experts from "./pages/Experts/Experts";
import More from "./pages/More/More";
import See from "./pages/See/See";
import OneMore from "./pages/OneMore/OneMore";
import Ovulation from "./pages/Ovulation/Ovulation";
import Hcg from "./pages/Hcg/Hcg";
import Test from "./pages/Test/Test";
import Period from "./pages/Period/Period";
import Implantation from "./pages/Implantation/Implantation";
import PregnancyCalc from "./pages/PregnancyCalc/PregnancyCalc";
import Due from "./pages/Due/Due";
import Ivf from "./pages/Ivf/Ivf";
import Ultrasound from "./pages/Ultrasound/Ultrasound";
import Contact from "./pages/Contact/Contact";
import Partner from "./pages/Partner/Partner";
import AdminPanel from "./pages/adminpanel/AdminPanel";
import Privacy from "./pages/Privacy/Privacy";
import Register from "./pages/Auth/Register/Register";
import Login from "./pages/Auth/Login/Login";
import { useSelector} from "react-redux";
import Partners from "./pages/Partners/Partners";
function App() {
                const role = [
                        {
                                id:1,
                                role:"admin"
                        },
                        {
                                id:2,
                                role:"user"
                        }
                ];
                const {data} = useSelector(store => store.auth)
    return(
        <Routes>
            <Route path={""} element={<Layout/>}>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/tracking"} element={<Tracking/>}/>
            <Route path={"/pregnant"} element={<Pregnant/>}/>
            <Route path={"/pregnancy"} element={<Pregnancy/>}/>
            <Route path={"/about"} element={<About/>}/>
            <Route path={"/medical"} element={<Medical/>}/>
            <Route path={"/try"} element={<Try/>}/>
            <Route path={"/research"} element={<Research/>}/>
            <Route path={"/press"} element={<Press/>}/>
            <Route path={"/calculators"} element={<Calculators/>}/>
            <Route path={"/experts/:id"} element={<Experts/>}/>
            <Route path={"/more"} element={<More/>}/>
            <Route path={"/see"} element={<See/>}/>
            <Route path={"/oneMore/:id"} element={<OneMore/>}/>
            <Route path={"/ovulation"} element={<Ovulation/>}/>
            <Route path={"/hcg"} element={<Hcg/>}/>
            <Route path={"/test"} element={<Test/>}/>
            <Route path={"/period"} element={<Period/>}/>
            <Route path={"/implantation"} element={<Implantation/>}/>
            <Route path={"/pregnancyCalc"} element={<PregnancyCalc/>}/>
            <Route path={"/due"} element={<Due/>}/>
            <Route path={"/ivf"} element={<Ivf/>}/>
            <Route path={"/ultrasound"} element={< Ultrasound/>}/>
            <Route path={"/contact"} element={< Contact/>}/>
            <Route path={"/partners"} element={< Partners/>}/>
            <Route path={"/partner"} element={< Partner/>}/>
                    {
                            data?.user?.role === "admin" ? <Route path={"/adminpanel"} element={< AdminPanel/>}/> : ""
                    }
            <Route path={"/help"} element={<Help/>}/>
            <Route path={"/privacy"} element={<Privacy/>}/>
            </Route>
                <Route path={"/register"} element={< Register/>}/>
                <Route path={"/login"} element={< Login/>}/>

        </Routes>

  );
}

export default App;
