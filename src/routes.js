/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import menu from "views/menu.jsx";
import list from "views/list.js";
import random from "views/random.js";
import home from "views/home.js";
import TableList from "views/Tables.js";
import Maps from "views/Map.js";
import regis from "views/regis.js";
import login from "views/login.js";
import insertmenu from "views/insertmenu.jsx";


var routes = [
  
  {
    name: "หน้าแรก",
    icon: "nc-icon nc-satisfied",
    path: "/home",
    component: home,
    layout: "/admin",
  },
  {
    path: "/menu",
    name: "เมนูอาหาร",
    icon: "nc-icon nc-book-bookmark",
    component: menu,
    layout: "/admin",
  },
  {
    path: "/random",
    name: "สุ่มอาหารทั้งหมด",
    icon: "nc-icon nc-tap-01",
    component: random,
    layout: "/admin",
  },
  
  {
    path: "/maps",
    name: "สุ่มอาหารจากพื้นที่ใกล้เคียง",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/list",
    name: "สร้างลิสต์",
    icon: "nc-icon nc-bullet-list-67",
    component: list,
    layout: "/admin",
  },
  
  {
    path: "/regis",
    name: "สมัครสมาชิก",
    icon: "nc-icon nc-single-02",
    component: regis,
    layout: "/admin",
  },
  
  {
    path: "/AddMenu",
    name: "จัดการเมนู",
    icon: "nc-icon nc-ruler-pencil",
    component: insertmenu,
    layout: "/admin",
  },



 
  {
    pro: true,
    path: "/login",
    name: "เข้าสู่ระบบ",
    icon: "nc-icon nc-spaceship",
    component: login,
    layout: "/admin",
  },
  
];
export default routes;
