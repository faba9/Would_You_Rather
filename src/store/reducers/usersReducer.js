import * as Types from '../actions/Types';

const usersReducer = (state={}, action) => {
    switch(action.type){
        case Types.GET_USERS:
            // add users to state
            return {...state, ...action.users};
        default :
            return state;
    }
};
export default usersReducer ;