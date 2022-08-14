import React from 'react';

const Footer = () => {
	return (
		<div>
			<footer class="footer">
				<div class="contenedor__footer">
					<div class="contenedro__footer-item">
						<h3>Support:</h3>
						<ul>
							<li>
								<a href="#">FAQ</a>
							</li>
							<li>
								<a href="#">Services</a>
							</li>
						</ul>
					</div>
					<div class="contenedro__footer-item social">
						<h3>Social:</h3>
						<ul>
							<li>
								<a href="#">
									<i class="bx bxl-instagram"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i class="bx bxl-twitter"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i class="bx bxl-linkedin"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="contenedor__footer-copy">
					<p>All rights reserved 2022</p>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
