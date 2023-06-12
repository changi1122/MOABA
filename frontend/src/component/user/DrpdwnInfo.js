import React from "react";
import { Link } from "react-router-dom";
import "./DrpdwnInfoStyle.css";

function DrpdwnInfo({header, cntnt1, action1, cntnt2, action2, cntnt3, action3}){
    return(
        <div className="user-drpdwn">
            <hr />
            <p className="user-header">{header}</p>
            <ul className="user-list">
                <li> <Link to={action1}>{cntnt1}</Link></li>
                <li> <Link to={action2}>{cntnt2}</Link></li>
                <li> <Link to={action3}>{cntnt3}</Link></li>
            </ul>
        </div>
    );
}

export default DrpdwnInfo;