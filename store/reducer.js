import { ON_ADD, ON_EDIT, ON_REMOVE } from "./const";

const initState = [];       //masiv dlya inicalizacii state

export function todoStore(state = initState, action) {
    if(action.type === ON_ADD){
        return[...state, action.payload]            //pri sozdanii mi dolzhni vernut'...state, i neposredstvenno samo deal kotoraya hranitsya v action.payload


    }else if(action.type ===ON_EDIT){
        return state.map((e) =>{
            if(e.id === action.payload.id){         //esli e.id = id (pri ON_EDIT dobavili eshe 1 delo, state ostanetsya bez izmeneniy)
                return {
                    ...e,
                    ...action.payload,
                }
            }
            return e;
        })
    }else if(action.type ===ON_REMOVE){
        return state.filter((e) => e.id !== action.payload);        //otfiltruem (esli id elements !== action.payload polu4aetsya mi ego udalim)
    
    }
    return state; 
}