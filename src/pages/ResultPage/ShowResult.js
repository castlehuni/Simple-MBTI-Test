import React from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import showResultStyled from "../../css/result/showresult.module.css"

function ShowResult(){
    const {mbti} = useParams();
    console.log(mbti);

    return(
        <div className={showResultStyled.ShowResult}> 
            <h2 style={{marginTop:"50px"}}>{mbti}는</h2>
            <div className={showResultStyled.ShowResultBox}>
                <p>안녕하세요</p>
            </div><br/>
            <div className={showResultStyled.movebtnArea}>
                <Link to="/"style={{textDecorationLine: 'none', color: "#FFCB42"}}><button>홈</button></Link>
                <Link to="/admin"style={{textDecorationLine: 'none', color: "#FFCB42"}}><button>관리자 페이지</button></Link>
            </div>
        </div>
    );
}
export default ShowResult