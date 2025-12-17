import { FLIGHTS } from './flights.data'
import { FlightsCard } from './FlightsCard'

export function FlightsList() {
	return (
		<div className='w-sm space-y-3'>
			{FLIGHTS.map(flight => (
				<FlightsCard key={flight.id} flight={flight} />
			))}
		</div>
	)
}
