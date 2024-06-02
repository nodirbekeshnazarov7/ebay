import style from './MainCategories.module.css';
import { FaHeart } from "react-icons/fa";
export const MainCategories = () => {
	return (
		<>
			<div className={style.main_categories}>
				<div className={style.container}>
					<ul>
						<li>
							<a href='#'>Home</a>
						</li>
						<li>
							<a href='#'>
								<FaHeart /> Saved
							</a>
						</li>
						<li>
							<a href='#'>Motors</a>
						</li>
						<li>
							<a href='#'>Electronics</a>
						</li>
						<li>
							<a href='#'>Collectibles</a>
						</li>
						<li>
							<a href='#'>Home & Garden</a>
						</li>
						<li>
							<a href='#'>Fashion</a>
						</li>
						<li>
							<a href='#'>Toys</a>
						</li>
						<li>
							<a href='#'>Sporting Goods</a>
						</li>
						<li>
							<a href='#'>Business & Industrial</a>
						</li>
						<li>
							<a href='#'>Jewelry & Watches</a>
						</li>
						<li>
							<a href='#'>eBay Live</a>
						</li>
						<li>
							<a href='#'>Refurbished</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};
