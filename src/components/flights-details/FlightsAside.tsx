import { SLIDE_RIGHT_ANIMATION } from '@/constants/animations'
import { FLIGHTS } from '@components/flights-list/flights.data'
import { AnimatePresence, motion } from 'motion/react'
import { useSearchParams } from 'react-router'
import { FLIGHTS_QUERY } from '../flights-list/flights.constants'
import { FlightsActions } from './FlightsActions'
import { FlightsDetailsHeader } from './FlightsDetailsHeader'
import { FlightsInformation } from './FlightsInformation'
import { FlightsProgressBar } from './FlightsProgressBar'
import { FlightsRoute } from './FlightsRoute'
import { FlightsSchedule } from './FlightsSchedule'

export function FlightsAside() {
	const [searchParams] = useSearchParams()

	const findFlight = FLIGHTS.find(
		flight => flight.id === searchParams.get(FLIGHTS_QUERY)
	)

	return (
		<AnimatePresence>
			{findFlight && (
				<motion.aside
					{...SLIDE_RIGHT_ANIMATION}
					className='w-sm m-5 rounded-2xl bg-[#0F1110]'
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
