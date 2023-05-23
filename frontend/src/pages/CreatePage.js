import React from "react";
import Layout from "../component/Layout";
import CrtContent from "../component/create/CrtContent";

function CreatePage(){

    return(
        <Layout
            header={"Create"}
            align_items={"Layout-center"}
            body={CrtContent()}
            T_styel={"content-H"}
            color={"white-blue-color"}
        />
    );

}

export default CreatePage;