import React  from 'react';

//import burgerLogo from '../../assets/images/burger-logo.png'; // this tell webpack wher e the image is (L144:- 3:26)
import classes from './Logo.css';

            //<img src={burgerLogo}  alt="MyBurger"/>
const logo = (props) => (
    <div className={classes.Logo}>
            <img   alt="MyBurger"/>
    </div>
);


export default logo;