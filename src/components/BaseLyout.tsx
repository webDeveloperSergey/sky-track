import { Outlet } from 'react-router'
import { Header } from './header/Header'

export function BaseLayout() {
	return (
		<div className="relative p-7 sm:p-2.5 overflow-hidden h-screen">
			<Header />
			<Outlet />
		</div>
	)
}
