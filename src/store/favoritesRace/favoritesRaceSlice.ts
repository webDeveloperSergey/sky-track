import { getDataFromLS, setDataToLS } from '@/helpers'
import { createSlice } from '@reduxjs/toolkit'

const LS_KEY = 'favoritesRace'

export type FavoritesRaceState = string[]

const initialState: FavoritesRaceState = getDataFromLS(LS_KEY)

export const favoritesRaceSlice = createSlice({
	name: LS_KEY,
	initialState,
	reducers: {
		addFavoritesRace: (state, action) => {
			if (state.includes(action.payload)) return

			state.push(action.payload)
			setDataToLS(LS_KEY, state)
		},
		removeFavoritesRace: (state, action) => {
			const newState = state.filter(raceId => raceId !== action.payload)
			setDataToLS(LS_KEY, newState)
			return newState
		}
	}
})

export const { addFavoritesRace, removeFavoritesRace } =
	favoritesRaceSlice.actions

export default favoritesRaceSlice.reducer
