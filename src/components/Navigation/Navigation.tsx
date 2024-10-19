import "./Navigation.css";

/**
 * The navbaseUrl is seperate/different from the page url in main.tsx
 */
export const navBaseUrl: string = "/website-portfolio/";

export default function Navigation() {
	return (
		<div>
			<nav>
				<a href={navBaseUrl}>
					<button className="navigationButton"> Home</button>
				</a>
				<a href={navBaseUrl + "#about"}>
					<button className="navigationButton"> About</button>
				</a>
				<a href={navBaseUrl + "#projects"}>
					<button className="navigationButton"> Projects</button>
				</a>
			</nav>
		</div>
	);
}
