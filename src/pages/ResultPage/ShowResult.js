import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import showResultStyled from "../../css/result/showresult.module.css"

function ShowResult(){
    const[MBTIintro, setMBTIintro] = useState([]);
    const {mbti} = useParams();
    console.log(mbti);

    //서버에서 데이터 호출하는 부분
    useEffect(()=>{
        const fetchMBTIData = async() => {
            try{
                const response = await axios.get('로컬주소입력해주세여/mbti/${mbti}'); //로컬주소로 입력해주세요 부분에 로컬 주소 입력해주시면 되여
                setMBTIintro(response.data)
            }catch(error){
                console.error("MBTI 정보를 가져오는 도중 에러 발생", error);
            }
        };

        fetchMBTIData();
    },[mbti]);

    return(
        <div className={showResultStyled.ShowResult}> 
            <h2 style={{marginTop:"50px"}}>{mbti}는</h2>
            <div className={showResultStyled.ShowResultBox}>
                <p>안녕하세요{MBTIintro.info}</p>
            </div><br/>
            <div className={showResultStyled.movebtnArea}>
                <Link to="/"style={{textDecorationLine: 'none', color: "#FFCB42"}}><button>홈</button></Link>
                <Link to="/admin"style={{textDecorationLine: 'none', color: "#FFCB42"}}><button>관리자 페이지</button></Link>
            </div>
        </div>
    );
}
export default ShowResult