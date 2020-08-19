import React from "react";
import classes from "./Navbar.module.css"
import {NavLink} from "react-router-dom";



const Navbar = () => {
    // const bestFriends = store._state.dialogsPage.dialogs.map(friend => {
    //     return <div>{friend.name}</div> ;
    // })
    return (<div>


        <nav className={classes.dropdown}>
            <button className="dropbtn">Dropdown</button>
            <div className={classes.dropdowncontent}>

                <NavLink to="/junior">Junior</NavLink><br></br>


                <NavLink to="/juniorPlusWithRedux">juniorPlusWithRedux</NavLink><br></br>


                <NavLink to="/preJunior">Pre Junior</NavLink>
            </div>


        </nav>
        </div>
    );
};

export default Navbar;
