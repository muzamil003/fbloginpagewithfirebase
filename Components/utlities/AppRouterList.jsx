import React from 'react';
import Home from '../../Screen/Home/Home';
import About from '../../Screen/About/About';
import Contact from '../../Screen/Contact/Contact';
import SignUpPage from '../../Screen/SignupPage/Signuppage';
import LogInPage from '../../Screen/Loginpage/Loginpage';


export const AppRouterList = [

{ path: "/",
    element: <SignUpPage />,
},
{ path: "/loginpage",
    element: <LogInPage />,
},
{ path: "/home",
    element: <Home />,
},

{
    path: "/:id",
    element: <Home />,
},
{
    path: "/about",
    element: <About />,
},
{
    path: "/contact",
    element: <Contact />,
}


]
