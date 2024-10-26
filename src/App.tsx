import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import * as React from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Footer from "./components/Footer/Footer";

/**
 * Ther Header contains the Navigation
 */
export const baseUrl: string = "/";

function App() {
	return (
		<div>
			<Header></Header>
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
