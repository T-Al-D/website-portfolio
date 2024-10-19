import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import App from "../App";

/**
 * On the server, the base URL of the application is "/website-portfolio/""
 * which has to be added to all navigation links in the pase
 */
export const baseUrl: string = "/website-portfolio/";

export const router = createBrowserRouter([
	{ path: baseUrl, element: <Home></Home> },
	{ path: baseUrl + "about", element: <About></About> },
	{ path: baseUrl + "projects", element: <Projects></Projects> },
]);
