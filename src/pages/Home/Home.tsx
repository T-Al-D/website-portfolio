import "./Home.css";
import { Box, Divider } from "@mui/material";
import Stack from "@mui/material/Stack";

const certList = [
	{
		name: "Ignition (SCADA) 8.1",
		description:
			" Ignition is a software tool to digitalize industrial processes.",
		languages: "Mostly Python, some SQL, CSS and HTML.",
	},
	{
		name: "Linux Essentials",
		description: "Certification from Linux Professional Institute.",
		languages: "Mostly Linux Terminal (Bash).",
	},
	{
		name: "Tulip",
		description:
			"Certification of low/no Code application for workstations.",
		languages: "",
	},
];

export default function Home() {
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
				<Stack
					divider={
						<Divider
							orientation="vertical"
							flexItem
							sx={{ background: "#fff" }}
						/>
					}
					direction={{ xs: "column", sm: "row" }}
					spacing={{ xs: 1, sm: 2, md: 4 }}
				>
					{certList.map((item) => (
						<Box
							className="mini-text"
							key={item.name}
							sx={{
								maxWidth: 200,
								minHeight: 180,
								justifyContent: "center",
								alignItems: "center",
								textAlign: "center",
								borderRadius: 5,
								border: "2px solid #2c2f8a",
								bgcolor: "rgba(26, 113, 154, 0.92)",
								"&:hover": {
									bgcolor: "rgba(11, 54, 74, 0.92)",
									border: "2px solid #1976d2",
								},
							}}
						>
							<header>{item.name}</header>
							<br></br>
							<div>{item.description}</div>
							<br></br>
							<footer>{item.languages}</footer>
						</Box>
					))}
				</Stack>
			</div>
			<pre className="basic-text">
				For the future I´m curious to see how software will create and
				shape more complex virtual worlds.
			</pre>
		</div>
	);
}
