import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { number } from 'prop-types'

export interface PotState {
  balance: number,
  bet: number,
}

const initialState: PotState = {
  balance: 1000,
  bet: 0

}

export const potSlice = createSlice({
  name: 'pot',
  initialState,
  reducers: {
    deposit: (state, action: PayloadAction<number>) => {
      state.balance += action.payload
    },
    withdraw: (state, action: PayloadAction<number>) => {
      state.balance -= action.payload
    },
    placeBet: (state, action: PayloadAction<number>) => {
      state.balance -= action.payload
      state.bet += action.payload
    },
    betWon: (state, action: PayloadAction<number>) => {
      state.bet = 0
      state.balance += action.payload
    },
    betLost: (state) => {
      state.bet = 0
    }
  },
})

// Action creators are generated for each case reducer function
export const { deposit, withdraw, placeBet, betWon, betLost } = potSlice.actions

export default potSlice.reducer