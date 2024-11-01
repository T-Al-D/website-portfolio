import homepageImg from "../../assets/images/homepage/hompepageImg2.png";
import Navigation, { navBaseUrl } from "../Navigation/Navigation";
import WavingHandIcon from "@mui/icons-material/WavingHand";

import "./Header.css";

export default function Header() {
	return (
		<div className="headParent">
			<div className="headChild">
				<a href={navBaseUrl}>
					<img className="homepageImg" src={homepageImg} alt="" />
				</a>
			</div>
			<div className="headChild">
				<header>
					<h1 className="headerLetters1">
						Hello, I´m T-Al-D <WavingHandIcon />
					</h1>

					<h3 className="headerLetters2">IT - Apprentice</h3>
				</header>
			</div>
			<Navigation></Navigation>
		</div>
	);
}
