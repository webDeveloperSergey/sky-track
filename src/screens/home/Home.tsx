import { FlightsDetails } from '@/components/FlightsDetails'
import { FlightsList } from '@/components/FlightsList'

export function Home() {
	return (
		<div className='flex justify-between'>
			<FlightsList />
			<FlightsDetails />
		</div>
	)
}
