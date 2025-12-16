import { cn } from '@/utils/cn'
import { Plane } from 'lucide-react'
import type { IFlight } from '../flights-list/flights.types'

interface Props {
	flight: IFlight
}

type FlightsRouteLayoutTmpProps = Record<
	'code' | 'city' | 'timezone',
	string
> & {
	customClass?: string
}

function FlightsRouteLayoutTmp({
	code,
	city,
	timezone,
	customClass = '',
}: FlightsRouteLayoutTmpProps) {
	return (
		<div
			className={cn(
				'flex flex-col justify-center items-center w-[50%] bg-[#1C1C1C]',
				customClass
			)}
		>
			<h2 className='mb-2 text-3xl font-semibold'>{code}</h2>
			<h3 className='mb-1 text-[#ECECEC]'>{city}</h3>
			<span className='text-xs text-[#808080]'>{timezone}</span>
		</div>
	)
}

export function FlightsRoute({ flight }: Props) {
	return (
		<div className='flex gap-1 h-35 relative'>
			<FlightsRouteLayoutTmp
				code={flight?.from.code}
				city={flight?.from.city}
				timezone={flight?.from.timezone}
				customClass='rounded-tl-xl'
			/>

			<div className='flex items-center justify-center mb-2 bg-neutral-950 rounded-full w-12 h-12 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
				<Plane className='text-amber-400' size={22} />
			</div>

			<FlightsRouteLayoutTmp
				code={flight?.to.code}
				city={flight?.to.city}
				timezone={flight?.to.timezone}
				customClass='rounded-tr-xl'
			/>
		</div>
	)
}
