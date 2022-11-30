import './App.scss';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { PageWelcome } from './pages/PageWelcome';
import { PageInfo } from './pages/PageInfo';
import { PageAbout } from './pages/PageAbout';
import { PageProducts } from './pages/PageProducts';
import { Product } from './components/Product';

function App() {
	return (
		<div className="App">
			<h1>Info Site</h1>
			<nav>
				<NavLink to="/welcome">Welcome</NavLink>
				<NavLink to="/info">Brands</NavLink>
				<NavLink to="/about">About</NavLink>
			</nav>

			<Routes>
				<Route path="/welcome" element={<PageWelcome />} />
				<Route path="/info" element={<PageInfo />} />
				<Route path="/products" element={<PageProducts />}>
					<Route path=":id" element={<Product/>}/>
				</Route>
				<Route path="/about" element={<PageAbout />} />
				<Route path="/" element={<Navigate to="/welcome" replace />} />
			</Routes>
		</div>
	);
}

export default App;
