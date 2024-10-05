import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Navigation from "./components/Navigation/Navigation";

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
			<MainContent></MainContent>
			<Footer></Footer>
		</div>
	);
}

export default App;
