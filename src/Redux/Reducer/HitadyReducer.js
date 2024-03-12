
const initialeState = {
    SeraTadiavina : []
}

const HitadyReducer = (state = initialeState , action)=>{
    switch(action.type){
        case "HITADY_SERA" :
            return {...state ,
                SeraTadiavina : [...state.SeraTadiavina , state.SeraTadiavina = action.payload]
            }
        default :
            return state    
    }
}

export default HitadyReducer;