npm install @reduxjs/toolkit react-redux
REACT REDUX

1. Create a Redux Store​
   - (src/app/store.js)
   - Import the configureStore API from Redux Toolkit.
2. Provide the Redux Store to React​
   - Make your store available to React Components by putting a react redux <Provider> around our application in src/index.js
   - Import the Store and send it as props
3. Create a Redux State Slice​
   - add file - src/features/counter/counterSlice.js
   - In that import the createSlice API from Redux
   - Creating a slice requires a string name to identify the slice, an initial state value, and one or more reducer functions to define how the state can be updated. Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice.
4. Add Slice Reducers to the Store​
   - import the reducer function from the counter slice and add it to our store
5. Use Redux State and Actions in React Components​
   - We can read data from the store with useSelector, and dispatch actions using useDispatch
