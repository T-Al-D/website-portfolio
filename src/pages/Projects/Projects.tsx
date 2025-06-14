import "./Projects.css";
import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Card,
	CardMedia,
	Button,
	Link,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";

import tkinterImg from "../../assets/images/projects/TkinterMixedProgramms.PNG";
import mixedProgramsImg from "../../assets/images/projects/MixedWPF.PNG";
import circuitESP32 from "../../assets/images/projects/workspace_ESP32.jpg";
import soccerRobotClassModel from "../../assets/images/projects/classes_SoccerRobot-Simultaion.png";

/* make sure the images are packaged in the objects correcty, no {} !*/
const projectList = [
	{
		id: 1,
		name: "Tkinter Mixed Programs",
		language: "Python 3",
		description:
			"Experimenting with Tkinter library to create a User-Interface.",
		imgSrc: tkinterImg,
		link: "https://github.com/T-Al-D/TkinterMixedApplication",
	},
	{
		id: 2,
		name: "Mixed WPF Programs",
		language: "C#",
		description:
			"Multiple small Programs bound to one WPF-App. Navigation possible.",
		imgSrc: mixedProgramsImg,
		link: "https://github.com/T-Al-D/MixedWPFApplication",
	},
	{
		id: 3,
		name: "Digitalization of a manufacturing model with ESP32.",
		language: "C++",
		description:
			"Async Webserver ESP32, with a small website to check all actuators.",
		imgSrc: circuitESP32,
		link: "https://github.com/T-Al-D/ESP32-AsyncWebserver/tree/finalApprenticeshipProject",
	},
	{
		id: 4,
		name: "SoccerRobot-Simulation",
		language: "Python",
		description:
			"Theoretical concept that I worked on during my apprenticeship. " +
			" Documented with doxygen.",
		imgSrc: soccerRobotClassModel,
		link: "https://github.com/T-Al-D/SoccerRobot-Simulation",
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
							<div className="accordion-outside-header">
								{item.name + " (" + item.language + ")"}
							</div>
						</AccordionSummary>
						<AccordionDetails>
							<Card>
								<CardMedia
									component="img"
									height="auto"
									width="auto"
									image={item.imgSrc.toString()}
									alt={""}
									sx={{}}
								/>
							</Card>
							<div>{item.description}</div>
							<Link href={item.link} underline="always">
								<Button
									sx={{
										margin: 1,
										border: "2px solid #1976d2",
										color: "#ffff",
										"&:hover": {
											backgroundColor: "#1a3869", // Change background on hover (example: blue)
											borderColor: "#ffff", // Change border color on hover (optional)
										},
									}}
									size="small"
								>
									Learn More
								</Button>
							</Link>
						</AccordionDetails>
					</Accordion>
				))}
			</div>
			<pre className="basic-text">
				{" "}
				In future, I hope to have more repositories with interesting
				projects.
				<SentimentSatisfiedIcon></SentimentSatisfiedIcon>
			</pre>
		</div>
	);
}
