// constant
const initialState = {
    projectArray: []
}

// types
const GET_PROJECT_NAME = 'GET_PROJECT_NAME'



// reducers
export default function projectReducer(state = initialState, action) {
    switch (action.type){
        case GET_PROJECT_NAME:
            return {...state, projectArray: action.payload}
        default:
            return state;


    }
}

// actions
export const getProjectNameAction = () => (dispatch, getState) => {
    dispatch({
        type: GET_PROJECT_NAME,
        payload: getState
    })

}




