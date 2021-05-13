import React, { lazy } from 'react';
/**
 * lazy和import的底层实现
 */
const contextComponent = lazy(() => import('./basic/useContext'));
const contextComponentOrigin = lazy(() => import('./basic/origin/useContext/useContextOrigin.js'));

const EffectComponent = lazy(() => import('./basic/useEffect'));
const EffectComponentOrigin = lazy(()=>import('./basic/origin/useEffect/useEffectOrigin.js'))
const StateComponent = lazy(() => import('./basic/useState'));
// const StateComponentOrigin = lazy(() => import('./basic/useStateOrigin'));

const MemoComponent = lazy(() => import('./extra/useMemo'));
const MemoComponentOrigin = lazy(()=>import('./extra/origin/useMemoOrigin.js'))
const ReducerComponent = lazy(() => import('./extra/useReducer'));
const RefComponent = lazy(() => import('./extra/useRef'));
const BugsComponent = lazy(() => import('./extra/bugs.js'));
const CustomComponent = lazy(() => import('./extra/customHooks.js'));

const CallBackComponent = lazy(() => import('./extra/useCallback.js'));

const Home = lazy(()=>import('./home.jsx'))


const routes = [
  { path: "/useState",name: "useState",component: StateComponent},
  // { path: "/useStateOrigin",name: "useState",component: StateComponentOrigin},


  { path: "/useEffect",name: "useEffect", component: EffectComponent},
  { path: "/useEffectOrigin",name: "useEffectOrigin", component: EffectComponentOrigin},

  { path: "/useContext", name: "useContext", component: contextComponent},
  { path: "/useContextOrigin", name: "useContextOrigin", component: contextComponentOrigin},



  { path: "/useCallBack", name: "useCallBack", component: CallBackComponent},

  { path: "/useRef", name: "useRef", component: RefComponent},
  { path: "/useMemo", name: "useMemo", component: MemoComponent},
  { path: "/useMemoOrigin", name: "useMemoOrigin", component: MemoComponentOrigin},

  { path: "/useBugs", name: "useBugs", component: BugsComponent},
  { path: "/useReducer", name: "useReducer", component: ReducerComponent},
  { path: "/useCustomHooks", name: "useCustomHooks", component: CustomComponent},

  { path: "/home",  name:"home",component: Home},

];

export default routes;
