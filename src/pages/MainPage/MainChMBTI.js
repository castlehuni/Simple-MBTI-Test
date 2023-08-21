import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import choicePageStyled from "../../css/main/mainChoice.module.css";

function MainChMBTI(){
    const[IorE, setIorE] = useState("");
    const[SorN, setSorN] = useState("");
    const[ForT, setForT] = useState("");
    const[JorP, setJorP] = useState("");

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

    const mbti = IorE + SorN + ForT + JorP;
    console.log(mbti);
    const navigate = useNavigate();
    
    const sendMBTI = () => {
        if(mbti){
            navigate(`/Result/${mbti}`);
        }
    };

    return(
        <div>
            <div className={choicePageStyled.MBTIbtnArea}>
                <div>
                    <button
                        className={choicePageStyled.MBTIbtn}
                        value={"I"}
                        onClick={checkIorE}
                        style={{backgroundColor: IorE === "I" ? "#FFCB42" : "black"}}
                    >I
                    </button>
                    <div className={choicePageStyled.info}><p>에너지 방향</p></div>
                    <button
                        className={choicePageStyled.MBTIbtn}
                        value={"E"}
                        onClick={checkIorE}
                        style={{backgroundColor: IorE === "E" ? "#FFCB42" : "black"}}
                    >E
                    </button>
                </div>
                <div>
                    <button
                        className={choicePageStyled.MBTIbtn}
                        value={"S"}
                        onClick={checkSorN}
                        style={{backgroundColor: SorN === "S" ? "rgb(237, 123, 230)" : "black"}}
                    >S
                    </button>
                    <div className={choicePageStyled.info}><p>인식 방식</p></div>
                    <button
                        className={choicePageStyled.MBTIbtn}
                        value={"N"}
                        onClick={checkSorN}
                        style={{backgroundColor: SorN === "N" ? "rgb(237, 123, 230)" : "black"}}
                    >N
                    </button>
                </div>
                <div>
                    <button
                        className={choicePageStyled.MBTIbtn}
                        value={"F"}
                        onClick={checkForT}
                        style={{backgroundColor: ForT === "F" ? "#FFCB42" : "black"}}
                    >F
                    </button>
                    <div className={choicePageStyled.info}><p>판단</p></div>
                    <button
                        className={choicePageStyled.MBTIbtn}
                        value={"E"}
                        onClick={checkForT}
                        style={{backgroundColor: ForT === "T" ? "#FFCB42" : "black"}}
                    >T
                    </button>
                </div>
                <div>
                    <button
                        className={choicePageStyled.MBTIbtn}
                        value={"J"}
                        onClick={checkJorP}
                        style={{backgroundColor: JorP === "J" ? "rgb(237, 123, 230)" : "black"}}
                    >J
                    </button>
                    <div className={choicePageStyled.info}><p>생활 양식</p></div>
                    <button
                        className={choicePageStyled.MBTIbtn}
                        value={"P"}
                        onClick={checkJorP}
                        style={{backgroundColor: JorP === "P" ? "rgb(237, 123, 230)" : "black"}}
                    >P
                    </button>
                </div>
            </div>
            <div className={choicePageStyled.CheckMBTIArea}>
                <button onClick={sendMBTI}>확인</button>
            </div>
        </div>
    );
}
export default MainChMBTI