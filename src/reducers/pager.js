export const CREATE = "PAGE/CREATE";
export const USER = "PAGE/USER";
export const LINKING = "PAGE/LINKING";

export const createPage = page=>({type:CREATE, page});
export const userPage = page=>({type:CREATE, page});
export const linkingPage = page=>({type:LINKING, page});

const initalState2 ={
    page: 0
};

export const pager =(state = initalState2, action)=>{
    switch(action.type){
        case CREATE:
            return{
                ...state,
                page : 1
            }
        case USER:
            return{
                ...state,
                page : 2
            }
        case LINKING:
            return{
                ...state,
                page : 3
            }
        
        default:
            return state;
    }
};
