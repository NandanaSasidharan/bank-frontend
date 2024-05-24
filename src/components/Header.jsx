import React from 'react';
 import './header.css';
 
 function Header() {
   return (
     <div className="h-wrapper ">
       <div className="h-container innerWidth">
         <div className="logo-container">
           <img 
             src="https://inkbotdesign.com/wp-content/uploads/2020/04/HSBC-Bank-Logo-Design-1024x576.webp" 
             alt="Logo" 
             width="100px" 
           />
         </div>
         <div className="menu-container">
           <div className="h-menu">
             <a href="#">Home</a>
             <a href="#">Our Value</a>
             <a href="#">Contact Us</a>
             <a href="#">Get Start</a>
             <button className="button">
               <a href="/login">LOGIN</a>
             </button>
           </div>
         </div>
       </div>
     </div>
   );
 }
 
 export default Header;
 