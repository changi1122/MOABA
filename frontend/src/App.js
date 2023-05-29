import React, {useEffect} from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";

import MainPage from "./pages/MainPage";
import UserPage from "./pages/UserPage";
import CreatePage from "./pages/CreatePage";
import DonePage from "./pages/DonePage";
import LinkingPage from "./pages/LinkingPage";
import Sidebar from './component/Sidebar';
import MenuShow from './component/sidebar/MenuShow';
import TempPage from './pages/TempPage';

import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import HomePage from './pages/HomePage';
import { setlogout } from './reducers/counter';



function App() {

  var dispacth = useDispatch();

  useEffect(()=>{
    var str = window.location.href;
    if(str === "http://localhost:3000/"){
      dispacth(setlogout());
    }
  },[dispacth]
  );

  const { isLogin } = useSelector(state => state.counter);
  console.log(isLogin);
  var UI ={
    LogOut : 
      <Routes>
        <Route path="/" element={<MainPage/>} />
      </Routes>,
    Log : 
    <div className='horazion'>
      <Sidebar
          width="150px"
          height="100%"
          color="white-blue-opacity"
          position="center" 
          fix="fix"
          content={MenuShow()}
      />
      <Routes>
        <Route path="/home" Component={HomePage}/>
        <Route path="/create" Component={CreatePage}/>
        <Route path="/linking" Component={LinkingPage} />
        <Route path="/done" Component={DonePage} />
        <Route path="/user" Component={UserPage} />
        <Route path="/page/:id" Component={TempPage} />
      </Routes>
    </div>
  }

  return(
    <BrowserRouter>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0" />
      {
        UI[isLogin]
      }
    </BrowserRouter>
  );
}

export default App;
