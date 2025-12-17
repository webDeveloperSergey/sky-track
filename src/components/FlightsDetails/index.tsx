import { FLIGHTS } from '@/components/FlightsList/flights.data'
import { SLIDE_RIGHT_ANIMATION } from '@/constants/animations'
import { AnimatePresence, motion } from 'motion/react'
import { useSearchParams } from 'react-router'
import { FLIGHTS_QUERY } from '../FlightsList/flights.constants'
import { FlightsActions } from './FlightsActions'
import { FlightsDetailsHeader } from './FlightsDetailsHeader'
import { FlightsInformation } from './FlightsInformation'
import { FlightsProgressBar } from './FlightsProgressBar'
import { FlightsRoute } from './FlightsRoute'
import { FlightsSchedule } from './FlightsSchedule'

export function FlightsDetails() {
	const [searchParams] = useSearchParams()

	const findFlight = FLIGHTS.find(
		flight => flight.id === searchParams.get(FLIGHTS_QUERY)
	)

	return (
		<AnimatePresence>
			{findFlight && (
				<motion.aside
					{...SLIDE_RIGHT_ANIMATION}
					className='w-sm rounded-2xl bg-[#0F1110] absolute right-7 top-7'
				>
					<FlightsDetailsHeader flight={findFlight} />

					{/* Main Flight`s data */}
					<div className='flex flex-col gap-3 m-3'>
						<div className='flex flex-col gap-1'>
							<FlightsRoute flight={findFlight} />
							<FlightsProgressBar />
							<FlightsSchedule />
						</div>

						<FlightsInformation flight={findFlight} />
						<FlightsActions />
					</div>
				</motion.aside>
			)}
		</AnimatePresence>
	)
}
