import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { number } from 'prop-types'
import { tokenMap } from '../sprites/SlotToken'
import { State } from 'pixi.js'

export interface ReelsState {
  reels: (keyof typeof tokenMap)[],
  winLine: number[],
  winTokens: { reel: number, index: number }[]
}

const initialState: ReelsState = {
  reels: [],
  winLine: [],
  winTokens: []
}

export const reelSlice = createSlice({
  name: 'reel',
  initialState,
  reducers: {
    setReels: (state, action: PayloadAction<ReelsState['reels']>) => {
      state.reels = action.payload
    },
    setWinLine: (state, action: PayloadAction<ReelsState['winLine']>) => {
      state.winLine = action.payload
    },
    setWinTokens: (state, action: PayloadAction<ReelsState['winTokens']>) => {
      state.winTokens = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setReels, setWinLine, setWinTokens } = reelSlice.actions

export default reelSlice.reducer