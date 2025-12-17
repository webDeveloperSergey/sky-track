import { cn } from '@/utils/cn'

type FlightsScheduleProps = Record<'text' | 'time', string> & {
	customClass?: string
}

function FlightsScheduleLayoutTmp({
	text,
	time,
	customClass = '',
}: FlightsScheduleProps) {
	return (
		<div
			className={cn(
				'flex justify-between items-center p-3.5 bg-[#1C1C1C] text-xs',
				customClass
			)}
		>
			<span className='text-[#808080]'>{text}</span>
			<span className='text-[#ECECEC]'>{time}</span>
		</div>
	)
}

export function FlightsSchedule() {
	return (
		<div className='grid grid-cols-2 gap-1'>
			<FlightsScheduleLayoutTmp text={'Scheduled'} time={'08:15'} />
			<FlightsScheduleLayoutTmp text={'Actual'} time={'08:24'} />

			<FlightsScheduleLayoutTmp
				text={'Scheduled'}
				time={'13:25'}
				customClass='rounded-bl-xl'
			/>
			<FlightsScheduleLayoutTmp
				text={'Estimated'}
				time={'13:23'}
				customClass='rounded-br-xl'
			/>
		</div>
	)
}
