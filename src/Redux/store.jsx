import { createSlice, configureStore } from "@reduxjs/toolkit";

import RepoSlice from "./repository";
// import AuthSlice from "./auth";
import CartSlice from "./product";
import { Deposit } from "./repository";
import { AddToCart } from "./product";


const ToDoStore = configureStore({
    // reducer: ToDoSlice.reducer

    // combine reducers
    reducer: {
        "ToDoReducer": RepoSlice.reducer,
        "CartReducer": CartSlice.reducer
    }
})

ToDoStore.subscribe(() => {
    console.log("current state", ToDoStore.getState());
})

ToDoStore.dispatch(Deposit(100))
// ToDoStore.dispatch({type: "Repo/Deposit", payload: 100});

ToDoStore.dispatch(AddToCart({"ProductName": "Mobile", "Price": 200}))
// ToDoStore.dispatch({type: "Auth/AddAuth", payload: {name: "Auth 1", status: "open"}});


export default ToDoStore;