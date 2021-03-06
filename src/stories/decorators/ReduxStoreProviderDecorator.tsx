import React from "react";
import {Provider} from "react-redux";
import store from "../../redux/redux-store";


export const ReduxStoreProviderDecorator= (storyFn:any)=>(
    <Provider store={store}>{storyFn()}

    </Provider>
)