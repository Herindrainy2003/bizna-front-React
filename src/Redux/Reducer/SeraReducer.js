
const initialState = {
    sera : []
}

const SeraReducer = ((state = initialState , action)=>{
    switch(action.type){
        case "ADD_SERA":
            return {...state , sera : [...state.sera  , state.sera = action.payload]} 
        default :
            return state    
    }
        
})


export default SeraReducer;