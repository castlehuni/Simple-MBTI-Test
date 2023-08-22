import React from "react";
import ResultHeader from "./ResultHeader";
import ShowResult from "./ShowResult";
import ResultFooter from "../MainPage/MainFooter";

function MBTIresult(){
    return(
        <div>
            <ResultHeader />
            <ShowResult />
            <ResultFooter/>
        </div>
    );
}
export default MBTIresult