export const SET_LOADING = "SET_LOADING"
export const SET_LOADING_TRUE = "SET_LOADING_TRUE"
export const SET_LOADING_FALSE = "SET_LOADING_FALSE"


type initialStateType = {
    loading: boolean
}

let initialState = {
    loading: false
}

function loadingReducer(state: initialStateType = initialState, action: allACTypes) {
    switch (action.type) {
        case SET_LOADING:
            return {...state, loading: action.loading}
        case SET_LOADING_TRUE:
            return {...state, loading: action.loading == true}

        case SET_LOADING_FALSE:
            return {...state,loading: action.loading == false}
        default:

            return state
    }
}

export const setLoading = (loading: boolean): loadingReducerType => ({
    type: SET_LOADING, loading: loading,
})

export const setLoadingTrue = (loading: boolean): loadingReducerTrueType => ({
    type: SET_LOADING_TRUE, loading: loading,
})

export const setLoadingFalse = (loading: boolean): loadingReducerFalseType => ({
    type: SET_LOADING_FALSE, loading: loading,
})


type allACTypes = loadingReducerType | loadingReducerTrueType | loadingReducerFalseType


type loadingReducerType = {
    type: typeof SET_LOADING
    loading: boolean

}

type loadingReducerTrueType = {
    type: typeof SET_LOADING_TRUE
    loading: boolean

}

type loadingReducerFalseType = {
    type: typeof SET_LOADING_FALSE
    loading: boolean

}


export default loadingReducer