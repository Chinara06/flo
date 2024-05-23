import {configureStore} from "@reduxjs/toolkit";
import team from "./team/team"
import more from "./more/more"
export const store = configureStore({
    reducer:{
        team,
        more,

    }
})