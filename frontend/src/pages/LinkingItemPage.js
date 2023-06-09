import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../component/Layout";
import LinkingItemContent from '../component/linking/LinkingItemContent';


function LinkingItemPage(){

    const { id }= useParams();

    return(
        <Layout
            header={"Linking"}
            body={LinkingItemContent()}
            align_items={"Layout-center"}
            T_styel={"content-H"}
            color={"white-blue-color"}
        />
    );
}

export default LinkingItemPage;