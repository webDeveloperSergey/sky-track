import { cn } from '@/utils/cn'
import type { PropsWithChildren } from 'react'
import type { IFlight } from '../flights-list/flights.types'

interface FlightsInformationLayoutTmpProps {
	label?: string
	info?: string
	customClass?: string
}

function FlightsInformationLayoutTmp({
	label,
	info,
	customClass = '',
	children,
}: FlightsInformationLayoutTmpProps & PropsWithChildren) {
	return (
		<div
			className={cn(
				'flex justify-between items-center p-3.5 bg-[#1C1C1C] text-xs',
				customClass
			)}
		>
			{label ? <span className='text-[#808080]'>{label}</span> : null}
			{info ? <span className='font-medium'>{info}</span> : null}
			{children ? children : null}
		</div>
	)
}

export function FlightsInformation({ flight }: { flight: IFlight }) {
	return (
		<div className='grid gap-1'>
			<div className='p-3.5 font-medium bg-[#282828] text-sm rounded-t-2xl'>
				Flight information
			</div>
			<div className='grid grid-cols-2 gap-1'>
				<FlightsInformationLayoutTmp info={flight.airplane.name} />
				<FlightsInformationLayoutTmp>
					<div className='flex items-center gap-2'>
						<img
							src={`/flags/${flight?.airline.country.toLowerCase()}.svg`}
							alt={flight?.airline.country}
							width={24}
							height={18}
							className='inline-block mr-1'
						/>
						<span>{flight.airline.country}</span>
					</div>
				</FlightsInformationLayoutTmp>

				<FlightsInformationLayoutTmp
					label='Speed'
					info='870 km/h'
					customClass='rounded-bl-xl'
				/>

				<FlightsInformationLayoutTmp
					label='Altitude'
					info='11 300m'
					customClass='rounded-br-xl'
				/>
			</div>
		</div>
	)
}
