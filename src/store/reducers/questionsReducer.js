import * as Types from '../actions/Types';

const questionsReducer = (state={}, action) => {
    switch(action.type){
        case Types.GET_QUESTIONS:
            // add questions to state
            return {...state, ...action.questions};
        default :
            return state;
    }
};
export default questionsReducer;