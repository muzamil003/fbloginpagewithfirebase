import React from 'react'
import { AppRouterList } from './AppRouterList'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
const AppRouter = () => {
  return (
    <Router>
<Routes>
{
  AppRouterList.map((e,i)=>{
    return <Route path={e.path} element={e.element} key={i}/>
  })
}

</Routes>



    </Router>
  )
}

export default AppRouter