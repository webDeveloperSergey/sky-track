import { Home } from '@screens/home/Home'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import { BaseLayout } from './components/BaseLyout'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store'

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
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	</StrictMode>
)
// favorites race
