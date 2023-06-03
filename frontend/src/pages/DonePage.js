import React from "react";
import Layout from "../component/Layout";
import ServeyList from "../component/done/ServeyList";

function DonePage(){
    
    return(
        <Layout
            header={"Result"}
            align_items={"Layout-center"}
            body={ServeyList()}
            T_styel={"content-H"}
            color={"white-blue-color"}
        />
    );
}

export default DonePage;