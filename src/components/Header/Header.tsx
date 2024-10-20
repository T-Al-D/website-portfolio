import homepageImg from "../../assets/images/homepage/hompepageImg2.png";
import { navBaseUrl } from "../Navigation/Navigation";

import "./Header.css";

export default function Header() {
	return (
		<div className="headParent">
			<div className="headChild">
				<a href={navBaseUrl}>
					<button className="homepageImg">
						<img className="homepageImg" src={homepageImg} alt="" />
					</button>
				</a>
			</div>
			<div className="headChild">
				<header>
					<h1 className="headerLetters1"> Hello, I´m T-Al-D</h1>
					<h3 className="headerLetters2">IT - Apprentice</h3>
				</header>
			</div>
		</div>
	);
}
