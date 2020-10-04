import React, { Suspense } from 'react';
import { useLocalStorage } from 'react-use';

const Boring = React.lazy(() => import('./components/Boring'))
const Exhausing = React.lazy(() => import('./components/Exhausting'))
const JustRight = React.lazy(() => import('./components/JustRight'))

const APP_STATES = Object.freeze({
  BORING: 1,
  EXHAUSTING: 2,
  JUST_RIGHT: 3
})

const APP_STATE_COMPONENTS = Object.freeze({
  [APP_STATES.BORING]: (setAppState) => <Boring onDone={() => setAppState(APP_STATES.EXHAUSTING)} />,
  [APP_STATES.EXHAUSTING]: (setAppState) => <Exhausing onDone={() => setAppState(APP_STATES.JUST_RIGHT)} />,
  [APP_STATES.JUST_RIGHT]: (setAppState) => <JustRight onDone={() => setAppState(APP_STATES.BORING)} />
})

function App() {
  const [ appState, setAppState ] = useLocalStorage('app-state', APP_STATES.BORING)
  return <Suspense fallback={<div />}>
    { APP_STATE_COMPONENTS[appState](setAppState) }
  </Suspense>;
}

export default App;
