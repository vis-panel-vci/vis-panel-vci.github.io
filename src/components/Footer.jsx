import React from "react";

import styles from "./Footer.module.scss";

const Footer = () => {
	return (
		<div>
			<div className={styles.realFooter}>
				<h6>
				Copyright © 2026 Arran Zeyu Wang. Based on <a href='https://vis-panel-enough-evaluation.github.io/'>Vis Evaluation Panel</a> designed by <a href='https://www.hyeonjeon.com/'>Hyeon Jeon</a>.
				</h6>
			</div>
		</div>
	)
}

export default Footer;