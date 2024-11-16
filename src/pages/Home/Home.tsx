import { Box, LinearProgress } from "@mui/material";
import "./Home.css";
import { useEffect, useState } from "react";

export default function Home() {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setProgress((oldProgress) => {
				// Stop the progress once it reaches 80%
				if (oldProgress >= 100) {
					clearInterval(timer);
					// No more progress change
					return oldProgress;
				}
				/**  reset progress if it reaches 100
				if (oldProgress === 100) {
					return 0;
				}*/
				// generate random increment
				const diff = Math.random() * 10;
				// increment progress, ensuring it doesn't exceed 100
				return Math.min(oldProgress + diff, 100);
			});
		}, 400); // updates progress every ...ms

		return () => {
			// cleanup the interval when the component unmounts
			clearInterval(timer);
		};
	}, []);

	return (
		<div>
			<pre className="basic-text">
				Welcome ... loading career... {Math.round(progress)}%
			</pre>
			<div>
				<Box sx={{ width: "100%" }}>
					<LinearProgress
						variant="determinate"
						value={progress}
						sx={{
							height: 12,
							borderRadius: 15,
							backgroundColor: "transparent",
							"& .MuiLinearProgress-bar": {
								background:
									"linear-gradient(45deg, #139cc2, #461385)", // Gradient applied here
							},
						}}
					/>
				</Box>
			</div>
		</div>
	);
}
