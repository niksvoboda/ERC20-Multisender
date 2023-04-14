
import {Route, Routes, Navigate} from "react-router-dom";
import React, { useContext } from 'react';
import {MAIN_ROUTE, HELP_ROUTE, APP_ROUTE} from "../utils/routes";
import Tpl_main from "../templates/tpl_main";
import App  from "../pages/app/app";
import Help from "../pages/help/help";
import Main from "../pages/main/main";

const AppRouter = () =>{

const user_routes = [
            {path: MAIN_ROUTE, element: <Tpl_main page = {<Main/>}/>},            
            {path: HELP_ROUTE, element: <Tpl_main page = {<Help/>}/>},
            {path: APP_ROUTE,  element: <Tpl_main page = {<App/>}/>},
            {path: '*', element: <Navigate to="/" replace/>}
      ]
 return(
     <>
     <Routes>
      {
       user_routes.map((p)=> <Route key={user_routes.indexOf(p)} path = {p.path} element = {p.element}/>) 
      }
      </Routes>
    </>
   )
}

export default AppRouter;