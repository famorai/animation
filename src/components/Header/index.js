import React from 'react';
import "./styles.css";
import logoImg from "../../components/Animation/assets/logo.png";


const Header = () => (
    // {Header.logo=`${logo}`}
    
   <header id="main-header">
     <img src={logoImg}/>
     Minerador Digital
     </header>
   );

export default Header;