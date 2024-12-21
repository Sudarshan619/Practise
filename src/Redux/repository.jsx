import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    "balance": 0,
}

const RepoSlice = createSlice({
    "name": "Repo",
    "initialState": initialState,
    "reducers": {
        Deposit: (state, action) => {
            state.balance += action.payload;
        },
        Withdraw: (state, action) => {
            state.balance -=  action.payload;
        }
    }
})

export const { Deposit, Withdraw } = RepoSlice.actions;

export default RepoSlice;