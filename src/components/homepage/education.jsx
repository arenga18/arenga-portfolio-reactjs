import React from "react";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/educations.css";

const Education = () => {
	return (
		<div className="education">
			<Card
				icon={faGraduationCap}
				title="education"
				body={
					<div className="educations-body">
						<div className="education">
							<img
								src="./mercu.png"
								alt="mercubuana"
								className="education-image"
							/>
							<div className="education-title">
								Mercu Buana University
							</div>
							<div className="education-subtitle">
								Information Systems
							</div>
							<div className="education-duration">
								2021 - Present
							</div>
						</div>

						<div className="education">
							<img
								src="./revou.png"
								alt="revou"
								className="education-image"
							/>
							<div className="education-title">
								Revou Tech Academy
							</div>
							<div className="education-subtitle">
								Software Engineer & Data Analyst
							</div>
							<div className="education-duration">2024</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Education;
