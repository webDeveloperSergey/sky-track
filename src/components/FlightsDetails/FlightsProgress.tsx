interface Props {
	progress: number
}

import { ProgressBar } from '../custom-ui/ProgressBar'

interface Props {
	progress: number
}

export function FlightsProgress({ progress }: Props) {
	return (
		<div className="grid h-22 items-center px-3.5 py-2 bg-[#1C1C1C]">
			<div className="">
				<ProgressBar percentage={progress} />
			</div>
			<div className="flex justify-between text-sm opacity-50">
				<div>
					<span>2 715 km</span>
					<span className="mx-2">•</span>
					<span>3h 1m</span>
				</div>
				<div>
					<span>882 km</span>
					<span className="mx-2">•</span>
					<span>59 min</span>
				</div>
			</div>
		</div>
	)
}
