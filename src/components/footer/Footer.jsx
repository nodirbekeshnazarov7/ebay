import style from './Footer.module.css';
import { ImFacebook2 } from 'react-icons/im';
import { FaTwitterSquare } from 'react-icons/fa';

export const Footer = () => {
	return (
		<>
			<footer>
				<div className={style.container}>
					<div className={style.footer_row}>
						<div className={style.footer_col}>
							<div className={style.footer_item}>
								<div className={style.footer_title}>Buy</div>
								<ul>
									<li>
										<a href='#'>Registration</a>
									</li>
									<li>
										<a href='#'>eBay Money Back Guarantee</a>
									</li>
									<li>
										<a href='#'>Bidding & buying help</a>
									</li>
									<li>
										<a href='#'>Stores</a>
									</li>
									<li>
										<a href='#'>eBay for Charity</a>
									</li>
									<li>
										<a href='#'>Charity Shop</a>
									</li>
									<li>
										<a href='#'>Seasonal Sales and events</a>
									</li>
								</ul>
							</div>
						</div>
						<div className={style.footer_col}>
							<div className={style.footer_item}>
								<div className={style.footer_title}>Sell</div>
								<ul>
									<li>
										<a href='#'>Start selling</a>
									</li>
									<li>
										<a href='#'>How to sell</a>
									</li>
									<li>
										<a href='#'>Business sellers</a>
									</li>
									<li>
										<a href='#'>Affiliates</a>
									</li>
								</ul>
							</div>
							<div className={style.footer_item}>
								<div className={style.footer_title}>Tools & apps</div>
								<ul>
									<li>
										<a href='#'>Developers</a>
									</li>
									<li>
										<a href='#'>Security center</a>
									</li>
									<li>
										<a href='#'>Site map</a>
									</li>
								</ul>
							</div>
						</div>
						<div className={style.footer_col}>
							<div className={style.footer_item}>
								<div className={style.footer_title}>Stay connected</div>
								<ul>
									<li>
										<a href='#' className={style.social_media}>
											<ImFacebook2 />
											<span>Facebook</span>
										</a>
									</li>
									<li>
										<a href='#' className={style.social_media}>
											<FaTwitterSquare />
											<span>Facebook</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className={style.footer_col}>
							<div className={style.footer_item}>
								<div className={style.footer_title}>About eBay</div>
								<ul>
									<li>
										<a href='#'>Company info</a>
									</li>
									<li>
										<a href='#'>News</a>
									</li>
									<li>
										<a href='#'>Investors</a>
									</li>
									<li>
										<a href='#'>Careers</a>
									</li>
									<li>
										<a href='#'>Diversity & Inclusion</a>
									</li>
									<li>
										<a href='#'>Global Impact</a>
									</li>
									<li>
										<a href='#'>Government relations</a>
									</li>
									<li>
										<a href='#'>Advertise with us</a>
									</li>
									<li>
										<a href='#'>Policies</a>
									</li>
									<li>
										<a href='#'>Verified Rights Owner (VeRO) Program</a>
									</li>
									<li>
										<a href='#'>eCI Licenses</a>
									</li>
								</ul>
							</div>
						</div>
						<div className={style.footer_col}>
							<div className={style.footer_item}>
								<div className={style.footer_title}>Help & Contact</div>
								<ul>
									<li>
										<a href='#'>Seller Center</a>
									</li>
									<li>
										<a href='#'>Contact Us</a>
									</li>
									<li>
										<a href='#'>eBay Returns</a>
									</li>
								</ul>
							</div>
							<div className={style.footer_item}>
								<div className={style.footer_title}>Community</div>
								<ul>
									<li>
										<a href='#'>Announcements</a>
									</li>
									<li>
										<a href='#'>eBay Community</a>
									</li>
									<li>
										<a href='#'>eBay for Business Podcast</a>
									</li>
								</ul>
							</div>
							<div className={style.footer_item}>
								<div className={style.footer_title}>eBay Sites</div>
							</div>
						</div>
					</div>
                    <div className={style.site_info}>Copyright © 1995-2023 eBay Inc. All Rights Reserved. Accessibility</div>
				</div>
			</footer>
		</>
	);
};
