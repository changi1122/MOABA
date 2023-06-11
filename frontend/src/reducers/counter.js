

export const INCRESE = "COUNT/INCRESE";
export const DECREASE = "COUNT/DECREASE";
export const DIVIDE = "COUNT/DIVID";
export const RESET = "COUNT/RESET";

export const LOGIN = "ISLOGIN/LOGIN";
export const LOGOUT = "ISLOGIN/LOGOUT"

export const NONE = "CLICK/NONE";
export const TEMP = "CLICK/TEMP";
export const SAVE = "CLICK/SAVE";
export const PROFILE = "CLICK/PROFILE";
export const CREATE = "CLICK/CREATE";
export const LINKING = "CLICK/LINKING";
export const TITLE = "CLICK/TITLE";

export const SEARCHING = "SEARCH/SEARCHING";
export const TONULL = "SEARCH/TONULL";

export const SETLIST = "SAVE/SETLIST";
export const DELETLIST = "SAVE/DELETLIST";
export const CLEANSAVE = "SAVE/CLEANSAVE";

export const SAVELIST = "TEMP/SAVELIST";
export const DROPLIST = "TEMP/DROPLIST";
export const CLEANTEMP = "TEMP/CLEANTEMP";


export const setsavelist = (save) =>{
    return{
        type:SETLIST, save
    };
}

export const deletesavelist = (save) =>({
    type:DELETLIST, save
});

export const makeEmptysave = (save) =>({
    type:CLEANSAVE, save
});

export const savetemplist = (temp) =>{
    return{
        type:SAVELIST, temp
    };
}

export const droptemplist = (temp) =>({
    type:DROPLIST, temp
});

export const makeEmptytemp = (temp) =>({
    type:CLEANTEMP, temp
});

export const setlogin = (isLogin) =>({
    type: LOGIN, isLogin
})

export const setlogout =  (isLogin) =>({
    type:LOGOUT, isLogin
})

export const StateNone = (click) =>({
    type:NONE, click
});

export const StateTemp = (click) =>({
    type:TEMP, click
});

export const StateSave = (click) =>({
    type:SAVE, click
});


export const StateProfile = (click) =>({
    type:PROFILE, click
});

export const StateCreate = (click) =>({
    type:CREATE, click
});

export const StateLinking = (click) =>({
    type : LINKING, click
});

export const StateTitle = (click)=>({
    type : TITLE, click
})


export const makeToNUll = (search) =>({
    type:TONULL, search
});

export const makeToSearch = (search)=>{
    return{
        type: SEARCHING,
        payload: search
    };
};


const initalState = {
    isLogin : "LogOut",
    click: "None",
    search:"",
    temp:[],
    save:[],
};

export const counter = (state = initalState, action) =>{
    switch(action.type){
        case INCRESE:
            return{
                ...state,
                count : state.count+1
            };
        case DECREASE:
            return{
                ...state,
                count: state.count-1
            }
        case DIVIDE:
            return{
                ...state,
                count: state.count/2
            }
        case RESET:
            return{
                ...state,
                count: 0
            }
        case LOGIN:
            return{
                ...state,
                isLogin : "Log"
            }
        case LOGOUT:
            return{
                ...state,
                isLogin : "LogOut"
            }
        case NONE:
            return{
                ...state,
                click : "None"
            }
        case TEMP:
            return{
                ...state,
                click : "Temp"
            }
        case SAVE:
            return{
                ...state,
                click : "Save"
            }
        case CREATE:
            return{
                ...state,
                click:"Create"
            }
        case PROFILE:
            return{
                ...state,
                click:"Profile"
            }
        case LINKING:
            return{
                ...state,
                click:"Linking"
            }
        case TITLE:
            return{
                ...state,
                click:"Title"
            }
        case SEARCHING:
            return{
                ...state,
                search: action.payload
            }
        case TONULL:
            return{
                ...state,
                search:""
            }
        case SETLIST:
            return{
                ...state,
                save : [...state.save, action.save]
            }
        case DELETLIST:
            return{
                ...state,
                save : state.save.filter(save => (save && save.id != action.save.id))
            }
        case CLEANSAVE:
            return{
                ...state,
                save:[]
            }
        case SAVELIST:
            return{
                ...state,
                temp : [...state.temp, action.temp]
            }
        case DROPLIST:
            return{
                ...state,
                temp : state.temp.filter(temp => (temp && temp.id != action.temp.id))
            }
        case CLEANTEMP:
            return{
                ...state,
                temp:[]
            }
        default:
            return state;
    }
};