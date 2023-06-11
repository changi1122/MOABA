import React from "react";
import Layout from "../component/Layout";

import ChangeEmailShow from '../component/main/ChangeEmailShow';

export default function ChangeEmailPage(){

    return (
        
        <Layout
            align_items={"Layout-center"}
            body={<ChangeEmailShow />}
            T_styel={"content-H"}
            color={"white-blue-color"}
        />

        // <div className="horazion">
        //     <ChangeEmailShow />
        // </div>
    );
}
