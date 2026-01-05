import { useMemo, useState } from 'react'
import { FlightsFromFilters } from '../filters/FlightsFromFilters'
import { FLIGHTS } from './flights.data'
import { FlightsCard } from './FlightsCard'

export function FlightsList() {
	// TODO костыль, переделать потом на стейт менеджер
	const [fromCountry, setFromCountry] = useState<string | null>(null)

	const filteredCountries = useMemo(() => {
		if (!fromCountry) return FLIGHTS
		return FLIGHTS.filter(flight => flight.from.country === fromCountry)
	}, [fromCountry])

	return (
		<div className="w-sm space-y-3">
			<FlightsFromFilters
				fromCountry={fromCountry}
				setFromCountry={setFromCountry}
			/>

			{filteredCountries.map(flight => (
				<FlightsCard
					key={flight.id}
					flight={flight}
				/>
			))}
		</div>
	)
}
