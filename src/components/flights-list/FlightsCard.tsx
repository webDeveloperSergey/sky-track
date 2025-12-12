import { useSearchParams } from 'react-router'
import { cn } from '@utils/cn'
import { FLIGHTS_QUERY } from './flights.constants'
import type { IFlight } from './flights.types'

interface Props {
	flight: IFlight
}

export function FlightsCard({ flight }: Props) {
	const [searchParams, setSearchParams] = useSearchParams()

	const isActiveFlight = searchParams.get(FLIGHTS_QUERY) === flight.airline

	return (
		<div
			className={cn(
				'p-0.5 rounded-2xl transition-colors ease-in cursor-pointer',
				isActiveFlight
					? 'bg-linear-to-r from-rose-500 to-orange-400'
					: 'bg-transparent'
			)}
			onClick={() => setSearchParams({ [FLIGHTS_QUERY]: flight.airline })}
		>
			<div className='rounded-2xl p-5 space-y-7 bg-neutral-900'>
				{/* Header */}
				<div className='flex justify-between items-center '>
					<div className='flex items-center gap-3'>
						<img
							src={flight.logo}
							alt={flight.aircraftReg}
							width={35}
							height={35}
							className='rounded-full bg-white'
						/>
						<span className='uppercase'>{flight.airline}</span>
					</div>

					<span className='px-2.5 py-1 bg-neutral-800 rounded-full text-sm uppercase'>
						{flight.aircraftReg}
					</span>
				</div>

				{/* Race info */}
				<div className='flex justify-between'>
					<div>
						<span className='text-xs'>{flight.from.city}</span>
						<h2 className='text-3xl font-semibold'>{flight.from.code}</h2>
					</div>

					{/* Progress Bar */}

					<div>
						<span className='text-xs'>{flight.to.city}</span>
						<h2 className='text-3xl font-medium'>{flight.to.code}</h2>
					</div>
				</div>
			</div>
		</div>
	)
}
