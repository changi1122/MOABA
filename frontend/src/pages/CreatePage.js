import React from "react";
import Layout from "../component/Layout";
import CrtSurvey from "../component/create/CrtSurvey";

function CreatePage(){

    return(
        <Layout
            header={"Create"}
            align_items={"Layout-center"}
            body={CrtSurvey()}
            T_styel={"content-H"}
            color={"white-blue-color"}
        />
    );

}

export default CreatePage;