import { cn } from '@/lib/utils'

interface ISkeletonLoader {
	count?: number
	className?: string
}

export function SkeletonLoader({ count = 1, className }: ISkeletonLoader) {
	return (
		<>
			{Array.from({ length: count }, (_, index) => (
				<div
					key={index}
					className={cn(
						'mb-[0.65rem] h-10 animate-pulse rounded-lg bg-neutral-900 last:mb-0',
						className
					)}
				/>
			))}
		</>
	)
}
