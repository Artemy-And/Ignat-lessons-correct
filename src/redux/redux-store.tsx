import { createStore, combineReducers } from "redux";
import loadingReducer from "../Components/10task/unknownReducer";
import themeReducer from "../Components/12task/themeReducer";



let reducers = combineReducers({
    loading: loadingReducer,
    theme:themeReducer

})

export type AppStateType = ReturnType<typeof reducers>

let store = createStore(reducers)

export default store