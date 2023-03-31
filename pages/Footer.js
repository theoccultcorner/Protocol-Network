import React from 'react';
import styles from "./index.module.css";
 

const Footer = () => {
	return (
		<div className={styles.wrapper}>
 
			<div className={`${styles.footer} container`}>
			 
				<div>
					<ul className={styles.content}>
						<li>About</li>
						<li>Contact Us</li>
						<li>Terms of Use</li>
						<li>Private Policy</li>
					 
					</ul>
				</div>
				<div> 
			<a class="social" href="https://www.facebook.com/PROTOCOLNETWORK">
    <i class="fa fa-facebook-f"></i>
  </a>
 
  <a class="social" href="https://www.instagram.com/xdrew2002x/">
    <i class="fa fa-instagram"></i>
  </a>	 
  </div>
				<div className={styles.flex__container}>
					<p className={styles.copyright}> © 2023 Protocol Network Mobile Mechanic All Rights Reserved</p>
					<a href="https://nevarezmarketing.com" class={styles.copyright}>Designed by Nevarez Marketing</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;