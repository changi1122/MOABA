import React from "react";
import Layout from "../component/Layout";
import LinkingContent from '../component/linking/LinkingContent';


function LinkingPage(){

    return(
        <Layout
            header={"Linking"}
            body={LinkingContent()}
            align_items={"Layout-center"}
            T_styel={"content-H"}
            color={"white-blue-color"}
        />
    );
}

export default LinkingPage;