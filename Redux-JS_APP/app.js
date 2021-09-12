const redux = require("redux"); // Importing Redux
const reduxLogger = require("redux-logger");
const createStore = redux.createStore; // calling createStore method from redux
const combinedReducers = redux.combineReducers; // to combine all the reducers in one store
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

console.log("Redux Bakery Tutotrial!!!");

// ACTIONS
const BUY_CAKE = "BUY_CAKE";
const BUY_DRINK = "BUY_DRINK";

// ACTIONS CREATORS: Funcs that return action type
const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "First Redux Action",
  };
};
const buyDrink = () => {
  return {
    type: BUY_DRINK,
    info: "Second Redux Action",
  };
};

// REDUCER (prevState, action) => newState

// Initial State of JS App
// const initialState = {
//   numOfCakes: 10,
//   numOfDrinks: 10,
// };

const initialCakeState = {
  numOfCakes: 20,
};
const initialDrinkState = {
  numOfDrinks: 100,
};

// Reducer with action type and cases
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return { ...state, numOfCakes: state.numOfCakes - 1 };
//     case BUY_DRINK:
//       return { ...state, numOfDrinks: state.numOfDrinks - 1 };
//     default:
//       return state;
//   }
// };

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numOfCakes: state.numOfCakes - 1 };
    default:
      return state;
  }
};

const drinkReducer = (state = initialDrinkState, action) => {
  switch (action.type) {
    case BUY_DRINK:
      return { ...state, numOfDrinks: state.numOfDrinks - 1 };
    default:
      return state;
  }
};

const rootReducer = combinedReducers({
  cake: cakeReducer,
  drink: drinkReducer,
});
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial State: ", store.getState());
const unsubscribe = store.subscribe(() => {
  // console.log("Updated State: ", store.getState())
});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyDrink());
store.dispatch(buyDrink());

unsubscribe();
