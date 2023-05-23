import React from "react";
import Layout from "../component/Layout";
import UserContent from "../component/user/UserContent";

function UserPage(){
    return(
        <Layout
            header={"My Page"}
            align_items={"Layout-center"}
            body={UserContent()}
            T_styel={"content-H"}
            color={"white-blue-color"}
        />
    );
}

export default UserPage;