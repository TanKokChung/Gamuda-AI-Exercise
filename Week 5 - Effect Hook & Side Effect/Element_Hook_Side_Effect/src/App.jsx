import RealTimeClock from "./components/Excercise_1";
import LifecycleDemo from "./components/Testing1";
import WindowTracker from "./components/Excercise_2";

function App () {
  return (
    <div>
      <RealTimeClock />
      <LifecycleDemo userId={3} />
      <WindowTracker />
    </div>
  )
}

export default App;