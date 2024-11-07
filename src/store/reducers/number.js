export default function numberReducer(state, action) {
    switch (action.type) {
        case 'numberAdd':
            return { ...state, number: state.number + 2 }        
        default:
            return state
    }
}