
export const INCRESE = "COUNT/INCRESE";
export const DECREASE = "COUNT/DECREASE";
export const DIVIDE = "COUNT/DIVID";
export const RESET = "COUNT/RESET";

export const LOGIN = "ISLOGIN/LOGIN";
export const LOGOUT = "ISLOGIN/LOGOUT"

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



const initalState = {
    count :0,
    isLogin : "LogOut",
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

        default:
            return state;
    }
};