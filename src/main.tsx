import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.tsx";
import Header from "./components/Header/Header.tsx";
import Navigation from "./components/Navigation/Navigation.tsx";
import Footer from "./components/Footer/Footer.tsx";

/**
 * The React Router is implemented a bit different in v6.4:
 * the Routes are defined and added to the structure as <RouterProvider routes>
 * to display other elements like Header or Footer, they have to be be put in
 * extra
 */
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Header></Header>
		<Navigation></Navigation>
		<RouterProvider router={router} />
		<Footer></Footer>
	</StrictMode>
);
