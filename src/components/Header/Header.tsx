import homepageImg from "../../assets/images/homepage/hompepageImg2.png";
import "./Header.css";

export default function Header() {
	return (
		<div className="headParent">
			<div className="headChild">
				<button className="homepageImg">
					<img className="homepageImg" src={homepageImg} alt="" />
				</button>
			</div>
			<div className="headChild">
				<header>
					<h1> Hello, I´m T-Al-D</h1>
					<h3>IT - Apprentice</h3>
				</header>
			</div>
		</div>
	);
}
