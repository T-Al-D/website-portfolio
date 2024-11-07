import "./Projects.css";
import {
	Accordion,
	AccordionSummary,
	Typography,
	AccordionDetails,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const projectList = [
	{
		id: 1,
		name: "TkInter Mixed Programs",
		language: "Python 3.x",
		description: "experimenting with Tkinter Library to create a UI.",
	},
];

export default function Projects() {
	return (
		<div>
			<pre className="basic-text">
				My most interesting projects (in GitHub) are:
			</pre>
			<div className="accordion">
				<Accordion sx={{ color: "#fff", background: "#074a42" }}>
					<AccordionSummary
						expandIcon={
							<ArrowDownwardIcon sx={{ color: "#fff" }} />
						}
						aria-controls="panel1-content"
						id="panel1-header"
					>
						<Typography>Accordion 1</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Suspendisse malesuada lacus ex, sit amet
							blandit leo lobortis eget.
						</Typography>
					</AccordionDetails>
				</Accordion>
			</div>
		</div>
	);
}
