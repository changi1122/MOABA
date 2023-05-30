export const INCRESE = "COUNT/INCRESE";
export const DECREASE = "COUNT/DECREASE";
export const DIVIDE = "COUNT/DIVID";
export const RESET = "COUNT/RESET";

export const LOGIN = "ISLOGIN/LOGIN";
export const LOGOUT = "ISLOGIN/LOGOUT"

export const NONE = "CLICK/NONE";
export const TEMP = "CLICK/TEMP";
export const SAVE = "CLICK/SAVE";

export const increaseCount = (count) =>({
    type:INCRESE, count
});

export const decreaseCount =(count) => ({
    type:DECREASE, count
});

export const divideCount = (count) =>({
    type:DIVIDE, count
});

export const resetCount = (count) =>({
    type:RESET, count
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




const initalState = {
    count :0,
    isLogin : "LogOut",
    click: "None",
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

        default:
            return state;
    }
};