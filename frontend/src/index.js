import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./screens/home";
import reportWebVitals from './reportWebVitals';
import "./css/custom.css";
import "./css/responsive.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Messages from './screens/messages';
import StaffMembers from './screens/staff';
import NotFound from './screens/not_found';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
    <Routes>
        <Route index element={<Home/>} ></Route>
        <Route path='/Messages/:id' element={<Messages/>} ></Route>
        <Route path='/Staff' element={<StaffMembers/>} ></Route>
        <Route path='*' element={<NotFound/>} ></Route>
    </Routes>
 </BrowserRouter>
);
reportWebVitals();
