import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import * as React from "react";
//import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
//import { router } from "./Routes/Routes";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";

/**
 *
	const [count, setCount] = useState(0);
  				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
        import { useState } from "react";
 * @returns 
 */

function App() {
	return (
		<div>
			<Header></Header>
			<Navigation></Navigation>
			<HashRouter basename="/website-portfolio">
				<Routes>
					<Route index path="/" element={<Home></Home>}></Route>
					<Route path="/about" element={<About></About>}></Route>
					<Route
						path="/projects"
						element={<Projects></Projects>}
					></Route>
				</Routes>
			</HashRouter>
		</div>
	);
}

/**
 * <Header></Header>
			<Navigation></Navigation>
			<Footer></Footer>
 */

export default App;
