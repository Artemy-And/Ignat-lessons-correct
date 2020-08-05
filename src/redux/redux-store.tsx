import { createStore, combineReducers } from "redux";
import loadingReducer from "../Components/10task/unknownReducer";



let reducers = combineReducers({
    loading: loadingReducer,

})

export type AppStateType = ReturnType<typeof reducers>

let store = createStore(reducers)

export default store