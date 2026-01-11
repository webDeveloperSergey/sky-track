import { match } from 'path-to-regexp'
import { Link, useLocation } from 'react-router'

import { Heart } from '../animate-ui/icons/heart'

import { HeaderMenuItem } from './HeaderMenuItem'
import { headerMenuData } from './header-menu.data'
import { cn } from '@/utils/cn'

export function Header() {
	const location = useLocation()

	const isFavoriteRaceRoute = !!match('/favorites')(location.pathname)

	return (
		<div className="bg-neutral-900 p-3 absolute top-7 left-1/2 flex w-[40%] -translate-x-1/2 items-center justify-between rounded-xl px-5 z-10">
			<div className="flex items-center gap-4 sm:gap-2">
				<img
					src="/logo.svg"
					alt="Sky Track Logo"
					className="h-12 w-12 sm:h-10 sm:w-10"
				/>
				<nav>
					<ul className="flex items-center gap-5 sm:gap-3">
						{headerMenuData.map(item => (
							<HeaderMenuItem
								key={item.href}
								item={item}
								isActive={!!match(item.href)(location.pathname)}
							/>
						))}
					</ul>
				</nav>
			</div>
			<div className="flex items-center gap-3 sm:gap-2">
				{/* TODO: Config */}
				<Link
					to="/favorites"
					className="bg-neutral-800 flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-neutral-700 sm:p-1"
				>
					<Heart
						animateOnHover
						size={23}
						fill={isFavoriteRaceRoute ? '#FEA523' : 'none'}
						className={cn({
							'text-[#FEA523]': isFavoriteRaceRoute
						})}
					/>
				</Link>
			</div>
		</div>
	)
}
