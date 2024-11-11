import { Button, Divider, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import "./Footer.css";

export default function Footer() {
	return (
		<div className="footer-parent">
			<Divider className="footer-divider" variant="middle" />
			<div className="footer-child">
				<h5 className="footer-content">
					<Link
						href="https://github.com/T-Al-D"
						className="footer-content"
					>
						<Button>
							T-Al-D GitHub
							<GitHubIcon></GitHubIcon>
						</Button>
					</Link>
					<Link
						href="https://github.com/T-Al-D/website-portfolio"
						className="footer-content"
					>
						<Button>
							Code behind website
							<CodeIcon></CodeIcon>
						</Button>
					</Link>
				</h5>
			</div>
		</div>
	);
}
