import React, {useState, useEffect} from "react";
import "./TempPageStyle.css";
import Layout from '../component/Layout';
import TempSurvey from '../component/create/TempSurvey';

export default function TempPage(props){

    return(
        <Layout
            header={"Temporarily stored"}
            align_items={"Layout-center"}
            body={TempSurvey()}
            T_styel={"content-H"}
            color={"white-blue-color"}
        />
    )
}
