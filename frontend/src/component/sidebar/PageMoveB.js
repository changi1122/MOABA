import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";


function PageMoveB({Bstyle,icon,openicon, animation="", content, url, data}){
    
    const { click } = useSelector(state => state.counter);
    const [active, Setactive] = useState("");
    /*
    var navigate = useNavigate();
    function MoveToTempPage(){

        console.log(data);
        var str = '/page/'+data;
        console.log(str)

        navigate(str);
    }
    */
    useEffect(()=>{
        if(active !== ""){
            const x = document.getElementById(`${active}`).parentElement;
            const str = x.className.replace(" activate-style", "");
            x.className = str;
            if(active === "Save" || active==="Tamp"){
                document.getElementById(`${active}`).innerHTML ="folder";
            }            
        }

        if(click !== "None" && click !=="Title"){
            Setactive(click);
            const y = document.getElementById(`${click}`).parentElement;
            y.className += " activate-style";
            if(click === "Save" || click==="Temp"){
                document.getElementById(`${click}`).innerHTML ="folder_open";
            }
        }
    }, [click]);


    function Open(){
        if(active !== content){
            document.getElementById(`${content}`).innerHTML = openicon;
        }
    }

    function Close(){
        if(active !==content){
            document.getElementById(`${content}`).innerHTML = icon;
        }
    }

    function None(){
    }

    function Test(){
        if(!data){
            url();
        }

        var ctnt =  document.getElementById("sidebar-sub").className;
        var siblingElement = document.getElementById('sidebar-sub').previousElementSibling;
        if(content==="Temp" || content==="Save"){
            if(ctnt.match(content==="Temp"? "Save":"Temp")){
                var subStr = document.getElementById("sidebar-sub").className;
                subStr = subStr.replace(content==="Temp"? "Save":"Temp", content);
                document.getElementById("sidebar-sub").className = subStr;
            }else if(!ctnt.match(content)){
                document.getElementById("sidebar-sub").className += " sidebar-menu-sub-show "+content;
                siblingElement.className += " sidebar-non-radius-style"
            }else{
                ChageClassName(ctnt, content, siblingElement);
            }
        }else{
            ChageClassName(ctnt, ctnt.match("Temp")?"Temp" : "Save", siblingElement);
        }
    }


    function ChageClassName(subStr, content, siblingElement){
        subStr = subStr.replace(" sidebar-menu-sub-show", "");
        subStr = subStr.replace(" "+content, "");
        document.getElementById("sidebar-sub").className = subStr;

        var sibling = siblingElement.className;
        sibling = sibling.replace("sidebar-non-radius-style", "");
        siblingElement.className = sibling;
    }

    return(
        <button className={`${Bstyle} ${animation}`} onClick={Test} 
            onMouseOver={openicon? Open : None} onMouseOut={ openicon? Close: None}>
            <span className="material-symbols-outlined material-symbols-size" id={`${content}`}>
                {icon}
            </span>
            <p>{content} </p> 
        </button>
    );
}

export default PageMoveB;