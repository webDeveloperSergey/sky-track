import { cn } from '@/lib/utils'
import { useSearchParams } from 'react-router'
import { X } from '../animate-ui/icons/x'
import { FLIGHTS_QUERY } from '../flights-list/flights.constants'
import type { IFlight } from '../flights-list/flights.types'

interface Props {
	flight: IFlight | undefined
}

export function FlightsDetailsHeader({ flight }: Props) {
	const [searchParams, setSearchParams] = useSearchParams()

	return (
		<div
			className={cn(
				'h-70 bg-linear-to-b rounded-t-2xl relative overflow-hidden',
				flight?.colorGradient[0] || 'bg-neutral-900',
				flight?.colorGradient[1] || 'bg-neutral-800'
			)}
		>
			<div className='w-[90%] flex justify-between items-center p-4 rounded-xl bg-neutral-900 top-3 left-1/2 -translate-x-1/2 absolute'>
				<div className=''>
					<h2 className='font-semibold text-xl text-[#E1A533]'>
						{flight?.airline || 'No airline not found'}
					</h2>
					<span className='text-xs'>
						{flight?.airplane.name || 'airplane name not found'}
					</span>
				</div>
				<button
					onClick={() => {
						searchParams.delete(FLIGHTS_QUERY)
						setSearchParams(searchParams)
					}}
					className='flex justify-center items-center bg-neutral-800 rounded-full h-8 w-8'
				>
					<X size={20} animateOnHover />
				</button>
			</div>

			<img
				src={flight?.airplane.image}
				alt={flight?.airplane.name}
				className='max-w-[95%] h-auto mx-auto absolute bottom-0 left-1/2 -translate-x-1/2'
			/>
		</div>
	)
}
