import { baseUrl } from "../../Routes/Routes";
import "./Navigation.css";

export default function Navigation() {
	return (
		<div>
			<nav>
				<a href={baseUrl}>
					<button className="navigationButton"> Home</button>
				</a>
				<a href={baseUrl + "about"}>
					<button className="navigationButton"> About</button>
				</a>
				<a href={baseUrl + "projects"}>
					<button className="navigationButton"> Projects</button>
				</a>
			</nav>
		</div>
	);
}
