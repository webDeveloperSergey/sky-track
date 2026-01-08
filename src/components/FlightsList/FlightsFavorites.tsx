import { useAppDispatch } from '@/store/hooks/useAppDispatch'
import { Heart } from '../animate-ui/icons/heart'
import { useAppSelector } from '@store/hooks/useAppSelector'
import {
	addFavoritesRace,
	removeFavoritesRace
} from '@store/favoritesRace/favoritesRaceSlice'

export function FlightsFavorites({ flightId }: { flightId: string }) {
	const dispatch = useAppDispatch()
	const favoritesRace = useAppSelector(state => state.favoritesRace)
	const isFavoriteRace = favoritesRace.includes(flightId)

	const addFavorites = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation()

		if (!isFavoriteRace) dispatch(addFavoritesRace(flightId))
		if (isFavoriteRace) dispatch(removeFavoritesRace(flightId))
	}

	return (
		<button
			onClick={e => addFavorites(e)}
			className="bg-neutral-800 p-2 rounded-md"
		>
			<Heart
				animateOnHover
				animateOnTap
				fill={isFavoriteRace ? 'white' : 'none'}
				size={20}
			/>
		</button>
	)
}
