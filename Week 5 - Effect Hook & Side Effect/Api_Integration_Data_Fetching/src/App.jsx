import UserManagement from "./components/Example_1";
import NewsAggregator from "./components/Excercise_1";
import WeatherApp from "./components/Excercise_2";

function App() {
  return (
    <div> 
      <h1>Below are Excercise 1:</h1>
    <UserManagement />
    <br/>
    <br/>
    <h2>This sections is for News:</h2>
    <NewsAggregator />
    <br/>
    <br/>
    <br/>
    <h3>This sections is for weather Forecast:</h3>
    <WeatherApp />
    <br/>
    <br/>
    <br/>
    </div>
  )
}

export default App;