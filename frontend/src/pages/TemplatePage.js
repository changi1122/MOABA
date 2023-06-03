import React from "react";
import SaveTemp from "../component/templat/SaveTemp";
import Layout from "../component/Layout";

function TemplatePage(){

    return(
        <Layout
            header={"Template"}
            body={SaveTemp()}
            align_items={"Layout-center"}
            T_styel={"content-H"}
            color={"white-blue-color"}
        />
    );
}

export default TemplatePage;
