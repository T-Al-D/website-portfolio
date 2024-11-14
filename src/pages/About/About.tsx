import {
	Divider,
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
	AccordionDetails,
	Accordion,
	AccordionSummary,
	Link,
	List,
	ListItem,
	ListItemButton,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import "./About.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const certList = [
	{
		id: 1,
		name: "Ignition (SCADA) 8.1",
		description:
			" Ignition is a software tool to digitalize industrial processes.",
		languages: "Mostly Python, some SQL, CSS and HTML.",
		imgSrc: "/",
		link: "#",
	},
	{
		id: 2,
		name: "Linux Essentials",
		description: "Certification from Linux Professional Institute.",
		languages: "Mostly Linux Terminal (Bash).",
		imgSrc: "/",
		link: "#",
	},
	{
		id: 3,
		name: "Tulip",
		description:
			"Certification of low/no Code application for workstations.",
		languages: "",
		imgSrc: "/",
		link: "#",
	},
];

export default function About() {
	return (
		<div>
			<pre className="basic-text">
				I´m programming since 2019 and discover since then the diverse
				and interesting World of Software.
			</pre>
			<pre className="basic-text">
				Most of the time I´m codeing in Python, C# or sometimes SQL. But
				I´ve also tried other languages like C or Typescript.
			</pre>
			<pre className="basic-text">
				Currently I´m in an apprenticeship to become an IT-specialist
				for application development.
			</pre>
			<div>
				<pre className="basic-text">
					As of now I have the following certifications:
				</pre>
				<Box sx={{ flexGrow: 1 }}>
					<Grid
						container
						size={{ xs: 6, md: 4 }}
						spacing={{ xs: 2, md: 3 }}
						columns={{ xs: 4, sm: 8, md: 12 }}
						className="mini-text"
					>
						{certList.map((item) => (
							<Grid
								key={item.id}
								sx={{
									margin: -0.085,
									padding: 2,
									border: "2px solid #1976d2",
									color: "#ffff",
									"&:hover": {
										backgroundColor: "#1a3869", // Change background on hover (example: blue)
										borderColor: "#ffff", // Change border color on hover (optional)
									},
								}}
							>
								{item.description}
							</Grid>
						))}
					</Grid>
				</Box>
			</div>
			<pre className="basic-text">
				For the future I´m curious to see how software will create and
				shape more complex virtual worlds.
			</pre>
		</div>
	);
}
