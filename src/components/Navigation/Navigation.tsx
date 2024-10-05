import "./Navigation.css";

export default function Navigation() {
	return (
		<div>
			<nav>
				<button className="navigationButton">
					homepage
					<a href="/"></a>
				</button>
				<button className="navigationButton">
					about me
					<a href="/about"></a>
				</button>
				<button className="navigationButton">
					projects
					<a href="/projects"></a>
				</button>
			</nav>
		</div>
	);
}
