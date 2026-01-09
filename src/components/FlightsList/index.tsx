import { useEffect, useMemo, useState } from 'react'
import { FlightsFromFilters } from '../filters/FlightsFromFilters'
import { FLIGHTS } from './flights.data'
import { FlightsCard } from './FlightsCard'
import { SkeletonLoader } from '../custom-ui/SkeletonLoader'

export function FlightsList() {
	const [fromCountry, setFromCountry] = useState<string | null>(null) // TODO костыль, переделать потом на стейт менеджер
	const [isLoading, setIsLoading] = useState(true)

	const filteredCountries = useMemo(() => {
		if (!fromCountry) return FLIGHTS
		return FLIGHTS.filter(flight => flight.from.country === fromCountry)
	}, [fromCountry])

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false)
		}, 1500)

		return () => {
			clearTimeout(timer)
		}
	}, [])

	return (
		<div className="w-sm space-y-3">
			<FlightsFromFilters
				fromCountry={fromCountry}
				setFromCountry={setFromCountry}
			/>

			{isLoading ? (
				<SkeletonLoader
					count={5}
					className="mb-4 h-40"
				/>
			) : (
				!!filteredCountries.length &&
				filteredCountries.map(flight => (
					<FlightsCard
						key={flight.id}
						flight={flight}
					/>
				))
			)}
		</div>
	)
}
