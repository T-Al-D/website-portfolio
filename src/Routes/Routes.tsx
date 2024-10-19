import { createHashRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
/**
 * On the server, the base URL of the application is "/website-portfolio/""
 * which has to be added to all navigation links in the pase
 *
 * the ErrorPage can be reached by any path that is not specified here (*)
 */

/*
export const baseUrl: string = "/website-portfolio/";
export const router = createHashRouter([
	{ path: baseUrl, element: <Home></Home> },
	{ path: baseUrl + "about", element: <About></About> },
	{ path: baseUrl + "projects", element: <Projects></Projects> },
	{ path: "*", element: <ErrorPage></ErrorPage> },
]);


 */

export const router = createHashRouter([
	{
		path: "/*",
		element: <App></App>,
		children: [
			{ path: "/", element: <Home></Home> },
			{ path: "about", element: <About></About> },
			{ path: "projects", element: <Projects></Projects> },
			{ path: "*", element: <ErrorPage></ErrorPage> },
		],
	},
]);
/***/
