import {createStore} from 'redux'

let counter = 0

function reducer(state = counter, action){
    switch (action.type){
        case  'increment':
            return state +1
        case 'decrement':
            return state - 1
        default: 
        return state    
    } 
}

export const store = createStore(reducer)