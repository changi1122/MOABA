import React from "react";
import Layout from "../component/Layout";
import HomeContent from "../component/home/HomeContent"

function HomePage(){

    return(
        <Layout
            header="모아봐"
            body={HomeContent()}
            align_items="Layout-center"
            T_styel="home-H"
            color="white-blue-color"
        />
    );
}

export default HomePage;