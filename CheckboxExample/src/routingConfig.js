import Login from './login/Logincomponent';
import Dashboard from './Dashboard/Dashboard';
import Profile from './Profile/Profile';
// import React from 'react';
// const roles = [{role={role:'admin',username:'admin',password:'admin',name:'Akash Matre'}}];

const routes = function(){

    return(
        [{path:'/' , component:Login},{path:'/Dashboard' , component:Dashboard},{path:'/profile' , component:Profile}]
    )
}
// /const routes = [{path:'/' , component:Login},{path:'/Dashboard' , component:Dashboard},{path:'/profile' , component:Profile}]
// export default roles;
export default routes;
