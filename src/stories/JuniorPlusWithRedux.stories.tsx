import React from 'react';
import {JuniorPlusWithRedux} from "../Components/12task/juniorPlusWithRedux";
import {ReduxStoreProviderDecorator} from "./decorators/ReduxStoreProviderDecorator";

export default {
  title: 'JuniorPlusWithRedux',
  component: JuniorPlusWithRedux,
  decorators:[ReduxStoreProviderDecorator]
}

export const JuniorPlusWithReduxExample = (props:any)=>{
  return(<JuniorPlusWithRedux/>)
}


