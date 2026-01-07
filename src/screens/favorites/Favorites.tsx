import { useMemo } from 'react'

import { Heading } from '@/components/custom-ui/Heading'
import { SubHeading } from '@/components/custom-ui/SubHeading'

import { useAppSelector } from '@store/hooks/useAppSelector'
import { FLIGHTS } from '@/components/FlightsList/flights.data'
import { FlightsCard } from '@/components/FlightsList/FlightsCard'

export function Favorites() {
	const favoritesRace = useAppSelector(state => state.favoritesRace)

	const flights = useMemo(() => {
		return FLIGHTS.filter(flight => favoritesRace.includes(flight.id))
	}, [favoritesRace])

	return (
		<div className="mx-auto w-[40%]">
			<Heading>Favorites</Heading>
			<SubHeading>
				You can add flights to your favorites by clicking the heart icon on the
				flight details page. Once added, you can view and manage your favorite
				flights here.
			</SubHeading>

			<div className="">
				{flights.map(flight => (
					<FlightsCard
						key={flight.id}
						flight={flight}
					/>
				))}
			</div>
		</div>
	)
}
