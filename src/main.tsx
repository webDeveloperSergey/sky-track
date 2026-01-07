import { Home } from '@screens/home/Home'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import { BaseLayout } from './components/BaseLyout'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store'
import { CenterLayout } from './components/CenterLayout'
import { Favorites } from './screens/favorites/Favorites'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route element={<BaseLayout />}>
						<Route
							index
							element={<Home />}
						/>
						<Route element={<CenterLayout />}>
							<Route
								path="/favorites"
								element={<Favorites />}
							/>
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	</StrictMode>
)
// favorites race
