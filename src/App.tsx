import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import * as React from "react";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Footer from "./components/Footer/Footer";

/**
 *
	const [count, setCount] = useState(0);
  				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
        import { useState } from "react";
 * @returns 
 */

export const baseUrl: string = "/";

function App() {
	return (
		<div>
			<Header></Header>
			<Navigation></Navigation>
			<HashRouter>
				<Routes>
					<Route path={baseUrl} element={<Home></Home>}></Route>
					<Route
						path={baseUrl + "about"}
						element={<About></About>}
					></Route>
					<Route
						path={baseUrl + "projects"}
						element={<Projects></Projects>}
					></Route>
				</Routes>
			</HashRouter>
			<Footer></Footer>
		</div>
	);
}

export default App;
