import React from "react";
import { Link } from 'react-router-dom';
import adminHeaderStyled from "../../css/adminpage/adminheader.module.css"

function AdminHeader(){
    return(
        <div className={adminHeaderStyled.Adminheader}>
            <p>MBTI</p>
            <Link to="/" style={{textDecorationLine: 'none', color: "#FFCB42"}}><button className={adminHeaderStyled.Homebtn}>홈</button></Link>
        </div>
    );
}
export default AdminHeader