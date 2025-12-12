import { Outlet } from 'react-router'

export function BaseLayout() {
	return (
		<div className='relative overflow-hidden'>
			<Outlet />
		</div>
	)
}
