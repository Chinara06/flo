import {configureStore} from "@reduxjs/toolkit";
import team from "./team/team"
import more from "./more/more"
import text from "./text/text"
import hcg from "./hcg/hcg"
import test from "./test/test"
import period from "./period/period"
import implantation from "./implantation/implantation"
import pregnancyCalc from "./pregnancyCalc/pregnancyCalc"
import due from "./due/due"
import ivf from "./ivf/ivf"
import ultrasound from "./ultrasound/ultrasound";
import library from "./library/library";
import contact from "./contact/contact";
import auth from "./auth/auth";
export const store = configureStore({
    reducer:{
        team,
        more,
        text,
        hcg,
        test,
        period,
        implantation,
        pregnancyCalc,
        due,
        ivf,
        ultrasound,
        library,
        contact,
        auth
    }
})