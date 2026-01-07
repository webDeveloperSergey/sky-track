import { configureStore } from '@reduxjs/toolkit'
import favoritesRaceReducer from '@store/favoritesRace/favoritesRaceSlice'

export const store = configureStore({
	reducer: {
		favoritesRace: favoritesRaceReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
