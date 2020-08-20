import * as actionType from '../actionType/actionType';

export const reducers =(state,action)=>{
    
    switch(action.type){
        case(actionType.INITIALIZE_POSTS):

        return{
            ...state,
            posts:action.payload,
            search:action.payload
        }
        case(actionType.POST_DATA):
        return{
            ...state,
            posts:state.posts.concat(action.payload)
        }
        case(actionType.SEARCH_POST):
        return{
            ...state,
            search:state.posts.filter(ser=>ser.title===action.title)
        }
        case (actionType.IS_SEARCH):
            return{
                ...state,
                issearch:action.payload
            }
        default:
            return state;
    }
}
