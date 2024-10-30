import { Button, Divider, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./Footer.css";

export default function Footer() {
	return (
		<div className="footer-parent">
			<Divider className="footer-divider" variant="middle" />
			<div className="footer-child">
				<h5 className="footer-content">2024</h5>
				<Link
					href="https://github.com/T-Al-D"
					className="footer-content"
				>
					<Button>
						<GitHubIcon></GitHubIcon>
					</Button>
				</Link>
			</div>
		</div>
	);
}
