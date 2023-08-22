import React from "react";
import AdminHeader from "./AdminHeader";
import AddMBTIInfo from "./AddMBTIInfo";
import AdminFooter from "../MainPage/MainFooter"

function MBTIadmin(){
    return(
        <div>
            <AdminHeader />
            <AddMBTIInfo />
            <AdminFooter />
        </div>
    );
}
export default MBTIadmin;