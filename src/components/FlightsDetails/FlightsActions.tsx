import { cn } from '@/utils/cn'
import { MoreHorizontal, Route } from 'lucide-react'
import { MapPin } from '../animate-ui/icons/map-pin'
import { SquareArrowOutUpRight } from '../animate-ui/icons/square-arrow-out-up-right'

interface FlightActionsLayoutTmpProps {
	text: string
	icon: React.ReactNode
	onAction: () => void
	customClass?: string
}

const ActionsMap = {
	onRoute: {
		text: 'Route',
		icon: <Route size={20} />,
		onAction: () => {},
	},
	onFollow: {
		text: 'Follow',
		icon: <MapPin animateOnHover size={20} />,
		onAction: () => {},
	},
	onShare: {
		text: 'Share',
		icon: <SquareArrowOutUpRight animateOnHover size={20} />,
		onAction: () => {},
	},
	onMore: {
		text: 'More',
		icon: <MoreHorizontal size={20} />,
		onAction: () => {},
	},
}

function FlightActionsLayoutTmp({
	text,
	icon,
	onAction,
	customClass = '',
}: FlightActionsLayoutTmpProps) {
	return (
		<button
			onClick={onAction}
			className={cn(
				'flex flex-col items-center gap-2 py-2.5 bg-[#1C1C1C] transition-colors hover:bg-neutral-800',
				customClass
			)}
		>
			{icon}
			<span className='text-sm'>{text}</span>
		</button>
	)
}

export function FlightsActions() {
	return (
		<div>
			<div className='grid grid-cols-4 gap-1'>
				{Object.keys(ActionsMap).map(actionKey => {
					const action = ActionsMap[actionKey as keyof typeof ActionsMap]

					return (
						<FlightActionsLayoutTmp
							key={actionKey}
							text={action.text}
							icon={action.icon}
							onAction={action.onAction}
							customClass={cn({
								'rounded-l-2xl': actionKey === 'onRoute',
								'rounded-r-2xl': actionKey === 'onMore',
							})}
						/>
					)
				})}
			</div>
		</div>
	)
}
