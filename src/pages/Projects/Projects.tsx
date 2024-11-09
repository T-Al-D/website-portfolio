import "./Projects.css";
import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Card,
	CardMedia,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import tkinterImg from "../../assets/images/projects/TkinterMixedProgramms.PNG";
import mixedProgramsImg from "../../assets/images/projects/MixedProgramms.PNG";

/* make sure the images are packaged in the objects correcty, no {} !*/
const projectList = [
	{
		id: 1,
		name: "Tkinter Mixed Programs",
		language: "Python 3",
		description:
			"Experimenting with Tkinter library to create a User-Interface.",
		imgSrc: tkinterImg,
	},
	{
		id: 2,
		name: "Mixed Programs",
		language: "C#",
		description:
			"Multiple small Programs bound to one. Navigation possible.",
		imgSrc: mixedProgramsImg,
	},
	{
		id: 3,
		name: "Async ESP32 Webserver",
		language: "C",
		description: "Async Webserver with simple website - mini IoT Project.",
		imgSrc: "",
	},
];

export default function Projects() {
	return (
		<div>
			<pre className="basic-text">
				My most interesting projects (in GitHub) are:
			</pre>
			<div className="basic-text">
				{projectList.map((item) => (
					<Accordion
						key={item.id}
						sx={{
							color: "#fff",
							background: "#12062e",
							borderRadius: 3,
						}}
					>
						<AccordionSummary
							sx={{
								textDecoration: "underline",
								"&:hover": {
									backgroundColor: "#260f5e",
								},
							}}
							expandIcon={
								<ArrowDownwardIcon
									sx={{
										color: "#fff",
									}}
								/>
							}
							aria-controls="panel1-content"
							id="panel1-header"
						>
							<div>{item.name}</div>
						</AccordionSummary>
						<AccordionDetails>
							<div className="accordion-inside-header">
								{item.language}
							</div>
							<Card>
								<CardMedia
									component="img"
									height="auto"
									width="auto"
									image={item.imgSrc.toString()}
									alt={""}
									sx={{ borderRadius: 2 }}
								/>
							</Card>
							<div>{item.description}</div>
						</AccordionDetails>
					</Accordion>
				))}
			</div>
		</div>
	);
}
