import React from "react";
import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import addmbtiinfoStyled from "../../css/adminpage/addMBTIinfo.module.css";

function AddMBTIInfo(){
    const[IorE, setIorE] = useState("");
    const[SorN, setSorN] = useState("");
    const[ForT, setForT] = useState("");
    const[JorP, setJorP] = useState("");
    const[newInfo, setNewInfo] = useState("");

    const checkIorE = (e) => {
        if(e.target.value === "I")
        {
            const iore = "I"
            setIorE(iore);
            console.log(e.target.value);
        }
        else
        {
            const iore = "E"
            setIorE(iore);
            console.log(e.target.value);
        }
    };

    const checkSorN = (e) => {
        if(e.target.value === "S")
        {
            const sorn = "S"
            setSorN(sorn);
            console.log(e.target.value);
        }
        else
        {
            const sorn = "N"
            setSorN(sorn);
            console.log(e.target.value);
        }
    };

    const checkForT = (e) => {
        if(e.target.value === "F")
        {
            const fort = "F"
            setForT(fort);
            console.log(e.target.value);
        }
        else
        {
            const fort = "T"
            setForT(fort);
            console.log(e.target.value);
        }
    };

    const checkJorP = (e) => {
        if(e.target.value === "J")
        {
            const jorp = "J"
            setJorP(jorp);
            console.log(e.target.value);
        }
        else
        {
            const jorp = "P"
            setJorP(jorp);
            console.log(e.target.value);
        }
    };

    const onMBTIInfoChange = (e) => {
        setNewInfo(e.target.value);
        console.log(e.target.value);
    }

    const newMBTI = IorE + SorN + ForT + JorP;
    console.log(newMBTI);

    const navigate = useNavigate();

    //서버로 post하는 함수
    const sendNewMBTIData = async () => {
        try{
            const response = await axios.post('로컬주소를 입력해주세요/mbti',{ //로컬주소로 입력해주세요 부분에 로컬 주소 입력해주시면 되여
                "mbti": newMBTI,
                "info": newInfo
            });
            alert("새로운 MBTI 정보 추가 성공! 홈으로 이동합니다.");
            navigate('/');
        }catch(err){
            console.log(err)
        }
    };

    return(
        <div>
            <div className={addmbtiinfoStyled.inputMBTIinfo}>
                <label htmlFor="MBTIinfo">성향 추가</label><br/>
                <input
                    id="MBTIinfo"
                    placeholder="추가할 성향을 입력하세요"
                    name="MBTIinfo"
                    value={newInfo}
                    onChange={onMBTIInfoChange}
                >
                </input>
            </div>
            <div className={addmbtiinfoStyled.MBTIbtnArea}>
                <div>
                    <button
                        className={addmbtiinfoStyled.MBTIbtn}
                        value={"I"}
                        onClick={checkIorE}
                        style={{backgroundColor: IorE === "I" ? "#FFCB42" : "black"}}
                    >I
                    </button>
                    <div className={addmbtiinfoStyled.info}><p>에너지 방향</p></div>
                    <button
                        className={addmbtiinfoStyled.MBTIbtn}
                        value={"E"}
                        onClick={checkIorE}
                        style={{backgroundColor: IorE === "E" ? "#FFCB42" : "black"}}
                    >E
                    </button>
                </div>
                <div>
                    <button
                        className={addmbtiinfoStyled.MBTIbtn}
                        value={"S"}
                        onClick={checkSorN}
                        style={{backgroundColor: SorN === "S" ? "rgb(237, 123, 230)" : "black"}}
                    >S
                    </button>
                    <div className={addmbtiinfoStyled.info}><p>인식 방식</p></div>
                    <button
                        className={addmbtiinfoStyled.MBTIbtn}
                        value={"N"}
                        onClick={checkSorN}
                        style={{backgroundColor: SorN === "N" ? "rgb(237, 123, 230)" : "black"}}
                    >N
                    </button>
                </div>
                <div>
                    <button
                        className={addmbtiinfoStyled.MBTIbtn}
                        value={"F"}
                        onClick={checkForT}
                        style={{backgroundColor: ForT === "F" ? "#FFCB42" : "black"}}
                    >F
                    </button>
                    <div className={addmbtiinfoStyled.info}><p>판단</p></div>
                    <button
                        className={addmbtiinfoStyled.MBTIbtn}
                        value={"E"}
                        onClick={checkForT}
                        style={{backgroundColor: ForT === "T" ? "#FFCB42" : "black"}}
                    >T
                    </button>
                </div>
                <div>
                    <button
                        className={addmbtiinfoStyled.MBTIbtn}
                        value={"J"}
                        onClick={checkJorP}
                        style={{backgroundColor: JorP === "J" ? "rgb(237, 123, 230)" : "black"}}
                    >J
                    </button>
                    <div className={addmbtiinfoStyled.info}><p>생활 양식</p></div>
                    <button
                        className={addmbtiinfoStyled.MBTIbtn}
                        value={"P"}
                        onClick={checkJorP}
                        style={{backgroundColor: JorP === "P" ? "rgb(237, 123, 230)" : "black"}}
                    >P
                    </button>
                </div>
            </div>
            <div className={addmbtiinfoStyled.CheckMBTIArea}>
                <button onClick={sendNewMBTIData}>MBTI 추가</button>
            </div>
        </div>
    );
}
export default AddMBTIInfo