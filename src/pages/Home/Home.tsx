import "./Home.css";

export default function Home() {
	return (
		<div>
			<div className="basic-text">
				<pre className="basic-text">Welcome!</pre>
				<pre className="basic-text">
					Currently I´m in an apprenticeship to become an
					IT-specialist in application development.
				</pre>
				<div className="face">
					<div className="eye left">
						<div className="pupil left"></div>
					</div>
					<div className="eye right">
						<div className="pupil right"></div>
					</div>
					<div className="mouth"></div>
				</div>
			</div>
		</div>
	);
}
