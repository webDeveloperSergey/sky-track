import { FlightsDetails } from '@/components/FlightsDetails'
import { FlightsList } from '@/components/FlightsList'
import { SkyTrackMap } from '@/components/SkyTrackMap'

export function Home() {
	return (
		<div>
			<div className="flex justify-between relative">
				<FlightsList />
				<FlightsDetails />
			</div>

			<div className="absolute inset-0 z-0">
				<SkyTrackMap />
			</div>
		</div>
	)
}
