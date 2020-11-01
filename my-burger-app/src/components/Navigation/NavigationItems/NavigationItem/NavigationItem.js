import React from 'react';

import classes from './NavigationItem.css';

const navigationItem = (props) => (
        <li classes={classes.NavigationItem}>
            <a 
                    href={props.link}
                    className={props.active ? classes.active : null}>{props.children}
            </a>
        </li>
);


export default navigationItem;

