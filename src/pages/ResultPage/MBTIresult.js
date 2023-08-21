import React from "react";
import { useParams } from "react-router-dom";

function MBTIresult(){
    const {mbti} = useParams();
    console.log(mbti);
    return(
        <div>
            <h2>result 페이지입니다</h2>
            <p>{mbti}</p>
        </div>
    );
}
export default MBTIresult;