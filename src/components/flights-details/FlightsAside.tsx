import { ASIDE_SLIDE_RIGHT } from '@/constants/animations'
import { FLIGHTS_QUERY } from '@components/flights-list/flights.constants'
import { FLIGHTS } from '@components/flights-list/flights.data'
import { AnimatePresence, motion } from 'motion/react'
import { useSearchParams } from 'react-router'
import { FlightsDetailsHeader } from './FlightsDetailsHeader'

export function FlightsAside() {
	const [searchParams] = useSearchParams()

	const findFlight = FLIGHTS.find(
		flight => flight.airline === searchParams.get(FLIGHTS_QUERY)
	)

	return (
		<AnimatePresence>
			{findFlight && (
				<motion.aside
					{...ASIDE_SLIDE_RIGHT}
					className='w-sm m-5 rounded-2xl bg-[#0F1110]'
				>
					<FlightsDetailsHeader flight={findFlight} />

					{/* Main Flight`s data */}
					<div></div>
				</motion.aside>
			)}
		</AnimatePresence>
	)
}
