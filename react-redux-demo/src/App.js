import "./App.css";
import CakeContainer from "./Components/CakeContainer";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>~ Cake Shop Application ~</h1>
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
