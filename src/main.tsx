import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
/**
 * import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.tsx";
import Header from "./components/Header/Header.tsx";
import Navigation from "./components/Navigation/Navigation.tsx";
import Footer from "./components/Footer/Footer.tsx";
 */

//import App from "./App.tsx";
import { HashRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About/About.tsx";
import Home from "./pages/Home/Home.tsx";
import Projects from "./pages/Projects/Projects.tsx";
import Header from "./components/Header/Header.tsx";
import Navigation from "./components/Navigation/Navigation.tsx";
import Footer from "./components/Footer/Footer.tsx";

export const baseUrl: string = "/";

/** website-portfolio
 * The React Router is implemented a bit different in v6.4:
 * the Routes are defined and added to the structure as <RouterProvider routes>
 * to display other elements like Header or Footer, they have to be be put in
 * extra
 */
createRoot(document.getElementById("root")!).render(
	<StrictMode>
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
	</StrictMode>
);
