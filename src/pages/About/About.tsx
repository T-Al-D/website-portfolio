import {
	Divider,
	Box,
	Card,
	CardContent,
	AccordionDetails,
	Accordion,
	AccordionSummary,
	CardActionArea,
	Link,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import "./About.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ignitionImg from "../../assets/images/certLogo/ignition-by-inductive-automation-logo-vector.svg";
import lpiImg from "../../assets/images/certLogo/lpi.svg";
import tulipImg from "../../assets/images/certLogo/Tulip-Feature.jpg";

const certList = [
	{
		id: 1,
		name: "Ignition (SCADA) 8.1",
		description:
			" Ignition is a software tool (from inductive automation), to digitalize industrial processes. Example: Industry 3.0 and 4.0",
		languages: "Mostly Python, some SQL and CSS for web or client.",
		imgSrc: ignitionImg,
		link: "https://inductiveautomation.com/",
	},
	{
		id: 2,
		name: "Linux Essentials",
		description: "Certification from Linux Professional Institute.",
		languages: "Basic knowledge about Linux and Bash-Terminal.",
		imgSrc: lpiImg,
		link: "https://www.lpi.org/",
	},
	{
		id: 3,
		name: "Tulip",
		description:
			"Certification of low/no code application for workstations.",
		languages: "",
		imgSrc: tulipImg,
		link: "https://tulip.co/",
	},
];

export default function About() {
	return (
		<div>
			<pre className="basic-text">
				I´m programming since 2019. Since then I discover the diverse
				and interesting world of Software.
			</pre>
			<pre className="basic-text">
				Most of the time I´m codeing in Python, C# or sometimes SQL. But
				I´ve also tried other languages like C or Typescript.
			</pre>
			<pre className="basic-text">
				In my apprenticeship, I have worked on a customer project with
				Ignition (SCADA).
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
									margin: -0.1,
									padding: 1,
								}}
							>
								<Card
									sx={{
										maxWidth: 375,
										minWidth: 175,
										height: "auto",
										margin: -0.25,
										padding: 0.95,
										border: "2px solid #1976d2",
										backgroundColor:
											"rgba(39, 29, 61, 0.59)",
										color: "#ffff",
										"&:hover": {
											backgroundColor:
												"rgba(33, 0, 54, 0.52)", // Change background on hover
											borderColor: "#ffff", // Change border color on hover
										},
									}}
								>
									<CardActionArea>
										<CardContent>
											<Accordion
												sx={{
													margin: -1.5,
													marginLeft: -2,
													marginRight: -2,
													padding: 0.25,
													color: "#ffff",
													backgroundColor:
														"rgba(47, 0, 110, 0.75)",
												}}
											>
												<AccordionSummary
													sx={{
														textDecoration:
															"underline",
														"&:hover": {
															backgroundColor:
																"#260f5e",
														},
													}}
													expandIcon={
														<ArrowDownwardIcon
															sx={{
																color: "#fff",
															}}
														/>
													}
												>
													<pre className="mini-text">
														{item.name}
													</pre>
												</AccordionSummary>
												<Divider
													sx={{
														backgroundColor:
															"#ffff",
													}}
												/>
												<AccordionDetails>
													<pre className="mini-text">
														{item.languages}
													</pre>
													<pre className="mini-text">
														{item.description}
													</pre>
													<Link
														href={item.link}
														sx={{
															margin: 1.3,
															marginLeft: -0.25,
															padding: 1,
															fontWeight: "bold",
															border: "2px solid #1976d2",
															color: "#ffff",
															"&:hover": {
																backgroundColor:
																	"#1a3869", // Change background on hover
																borderColor:
																	"#ffff", // Change border color on hover
															},
														}}
													>
														Learn More
													</Link>
												</AccordionDetails>
											</Accordion>
										</CardContent>
									</CardActionArea>
								</Card>
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
