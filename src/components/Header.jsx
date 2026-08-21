import React from "react";

import styles from "./Header.module.scss";

import parse from 'html-react-parser';




const Header = () => {

	return (
		<div>
			<img src="./imgs/vis2026_logo.svg" alt="IEEE VIS 2026 Logo" className={styles.logo} />
			<div className={styles.headerWrapper}>
				<h2>{parse("From Correlation to Causality ---")}<span  className={styles.headerWrapper}>{"Future Directions in Visual Causal Inference"}</span></h2>
			</div>
				<h3>{"Panel @ IEEE VIS 2026"}</h3>
				{/* <h3 className={styles.dateWrapper}>{"Wednesday, Nov. 5, 2026. 3:45 PM - 5:00 PM CET (GMT+2)"}</h3> */}
				{/* <h3 className={styles.dateWrapper}>{"Room 0.11 + 0.12"}</h3> */}
			<p>
				{parse("Visualizations excel at revealing correlational patterns, yet human viewers frequently and naturally draw causal conclusions from these representations despite the well-known maxim that correlation does not imply causation. This persistent tension has catalyzed a rapidly growing Visual Causal Inference (VCI) research community, with 35 full papers published in major visualization venues over the past five years—including a VIS best paper award and three VIS honorable mentions. However, the field faces significant fragmentation: current VCI methods, tools, and experiments largely operate in isolation, lacking clear connections across research threads and a unified theoretical foundation. Many systems employ node-link causal models with limited empirical validation of their effectiveness, counterfactual approaches risk logical inconsistencies, and studies of human causal reasoning biases remain confined to narrow representational contexts. Critically, the field lacks standardized evaluation benchmarks and metrics for assessing the quality of causal inferences made through visual analytics. This VCI panel—the first to our knowledge—brings together leading researchers with diverse expertise in causal models, causal reasoning, cognitive science, generative AI, and agentic systems, and aims to discuss four core objectives: developing actionable frameworks for integrating causal inference into visual analytics, establishing empirically-rigorous foundations grounded in how people infer causality from visualizations, identifying opportunities to transform EDA tool design through VCI principles, and inspiring interdisciplinary research directions. This panel will promote the development of a coherent theory for VCI, one that relates when, where, why, and how causal inferences are made in EDA, enabling more robust reasoning and decision-making through visualization.")}
			</p>
						{/* <p>
							Relevant efforts:
							{' '}
							<a href="https://visxvision.com/" target="_blank" rel="noopener noreferrer">VisXVision</a> and
							{' '}
							<a href="https://sites.google.com/view/vispsych/" target="_blank" rel="noopener noreferrer">VisPsych</a> (workshops),
							{' '}
							<a href="https://link.springer.com/book/10.1007/978-3-031-34738-2" target="_blank" rel="noopener noreferrer">Visualization Psychology</a> (book),
							{' '}
							<a href="https://www.dagstuhl.de/25511" target="_blank" rel="noopener noreferrer">Dagstuhl Seminar 25511</a>
						</p> */}
		</div>
	)
}

export default Header;