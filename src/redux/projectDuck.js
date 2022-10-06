// constant
const initialState = {
    projectTitle: ''
}

// types
const GET_PROJECT_NAME = 'GET_PROJECT_NAME'



// reducers
export default function projectReducer(state = initialState, action) {
    switch (action.type){
        case GET_PROJECT_NAME:
            return {...state, projectTitle: action.payload}
        default:
            return state;


    }
}

// actions
export const getProjectNameAction = () => (dispatch, action) => {
    dispatch({
        type: GET_PROJECT_NAME,
        payload: action
    })

}




