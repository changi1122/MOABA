import React, {useState, useEffect} from "react";
import { useParams } from "react-router";
import Recommend from "../home/Recommend";
import "./SaveTempStyle.css";
import { useDispatch, useSelector } from "react-redux";
import { makeToSearch } from "../../reducers/counter";

function SaveTemp(){
    const { id } = useParams();
    const { search } = useSelector(state => state.counter);

    var dispacth = useDispatch();


    useEffect(()=>{
        console.log("chage", search);
    },[search]);

    console.log(id);

    function SearchString(){
        var x  =document.getElementById("search").value;
        dispacth(makeToSearch(x))
    }

    return(
        <div className="HC-body">
            <div className="Template-Body">
                <input type="text" placeholder="Search" className="Template-Body-search" id="search"/>
                <span class="material-symbols-outlined material-search" onClick={SearchString}>
                    search
                </span>
            </div>

            <Recommend
                Limit={false}
            />
        </div>
    );

}

export default SaveTemp;