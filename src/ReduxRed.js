const redux= require('redux')
const createStore = redux.createStore

const EAT_ICECREAM="EAT_ICECREAM";
const eater =()=>{
    return {
        type:EAT_ICECREAM,
        noOfIcecream:2
    }
}


const INITIAL_STATE = {noOfIcecream:100};
const reducer =(state=INITIAL_STATE,action) =>{
    switch(action.type){
        case EAT_ICECREAM:
            return {
                ...state,
                noOfIcecream:noOfIcecream-1
            }
        default:
            return state
    }
}

const store= createStore(reducer)

const unsubscribe=store.subscribe (()=> console.log('Update state', store.getState()))
store.dispatch(eater())
store.dispatch(eater())
unsubscribe()