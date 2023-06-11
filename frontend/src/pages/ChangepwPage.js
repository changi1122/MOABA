import React from "react";
import Layout from "../component/Layout";

import ChangepwShow from '../component/main/ChangepwShow';

export default function ChangepwPage(){

    return (
        <Layout
            header={"My Page"}
            align_items={"Layout-center"}
            body={<ChangepwShow />}
            T_styel={"content-H"}
            color={"white-blue-color"}
        />
    );
}
