import * as Types from '../actions/Types';
const authReducer = (state=null, action) => {
    switch(action.type){
        case Types.LOGIN:
            return action.id
        case Types.LOGOUT:
            return null;
        default :
            return state;
    }
};
export default authReducer ;