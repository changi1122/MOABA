import React from "react";
import Layout from "../component/Layout";

import DeleteAccountShow from '../component/main/DeleteAccountShow';

export default function DeleteAccountPage(){

    return (
        <Layout
            header={"My Page"}
            align_items={"Layout-center"}
            body={<DeleteAccountShow />}
            T_styel={"content-H"}
            color={"white-blue-color"}
        />
    );
}
