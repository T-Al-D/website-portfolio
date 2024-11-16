import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import * as React from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Footer from "./components/Footer/Footer";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { Box, Slide } from "@mui/material";
import { useRef } from "react";

/**
 * Ther Header contains the Navigation
 * The last Route is for the Error Page
 */
export const baseUrl: string = "/";

function App() {
	let containerRef = useRef<HTMLElement>(null);
	return (
		<div>
			<Header></Header>
			<Box sx={{ width: "100%", overflow: "hidden" }} ref={containerRef}>
				<Slide
					in={true}
					timeout={{ enter: 1000 }}
					container={containerRef.current}
				>
					<div>
						<HashRouter>
							<Routes>
								<Route
									path={baseUrl}
									element={<Home></Home>}
								></Route>
								<Route
									path={baseUrl + "about"}
									element={<About></About>}
								></Route>
								<Route
									path={baseUrl + "projects"}
									element={<Projects></Projects>}
								></Route>
								<Route
									path={baseUrl + "*"}
									element={<ErrorPage></ErrorPage>}
								></Route>
							</Routes>
						</HashRouter>
					</div>
				</Slide>
			</Box>
			<Footer></Footer>
		</div>
	);
}

export default App;
