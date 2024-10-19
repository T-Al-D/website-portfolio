import "./App.css";
// import * as React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
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
			<Footer></Footer>
		</div>
	);
}

export default App;
