import { FlightsAside } from '@/components/flights-details/FlightsAside'
import { FlightsList } from '@components/flights-list/FlightsList'

export function Home() {
	return (
		<div className='flex justify-between'>
			<FlightsList />
			<FlightsAside />
		</div>
	)
}
