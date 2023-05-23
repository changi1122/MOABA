import React from "react";
import Layout from "../component/Layout";
import SrvList from "../component/done/SrvList";

function DonePage(){
    
    return(
        <Layout
            header={"Result"}
            align_items={"Layout-center"}
            body={SrvList()}
            T_styel={"content-H"}
            color={"white-blue-color"}
        />
    );
}

export default DonePage;