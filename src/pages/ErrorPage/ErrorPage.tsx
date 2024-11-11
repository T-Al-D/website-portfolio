import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

export default function ErrorPage() {
	return (
		<div>
			<pre className="basic-text">
				Sorry, but this page doesn´t exist!{" "}
				<SentimentVeryDissatisfiedIcon />
			</pre>
		</div>
	);
}
