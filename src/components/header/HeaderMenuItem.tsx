import { Link } from 'react-router'

import { cn } from '@/lib/utils'

import type { IHeaderMenuItem } from './header-menu.data'

interface Props {
	item: IHeaderMenuItem
	isActive?: boolean
}

export function HeaderMenuItem({ item, isActive }: Props) {
	return (
		<li>
			<Link
				to={item.href}
				className={cn(
					'text-lg transition-all hover:text-gray-400 sm:text-base',
					isActive ? 'text-[#FEA523] font-medium' : 'text-gray-300'
				)}
			>
				{item.label}
			</Link>
		</li>
	)
}
