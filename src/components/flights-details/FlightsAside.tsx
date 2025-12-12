import { FLIGHTS_QUERY } from '@components/flights-list/flights.constants'
import { FLIGHTS } from '@components/flights-list/flights.data'
import { useSearchParams } from 'react-router'

export function FlightsAside() {
	const [searchParams] = useSearchParams()

	const findFlight = FLIGHTS.find(
		flight => flight.airline === searchParams.get(FLIGHTS_QUERY)
	)

	return (
		<aside className='w-sm m-5 rounded-2xl bg-neutral-900'>
			{/* Header */}
			<div>
				<div>
					<div>
						<h2>{findFlight?.airline}</h2>
						<span>{findFlight?.airplane.name}</span>
					</div>
					<button>Close</button>
				</div>
			</div>

			{/* Main Flight`s data */}
			<div></div>
		</aside>
	)
}
