import style from './HeaderTop.module.css';
import { SlBasket } from "react-icons/sl";
import bell from '../../assets/bell.svg';
export const HeaderTop = () => {
	return (
		<>
			<div className={style.header_top}>
				<div className={style.header_top_left}>
					<div className={style.greeting}>
						<p>
							Hi! <a href='#'>Sign in</a>
						</p>
						<p>
							or <a href='#'>register</a>
						</p>
					</div>
					<ul className={style.navs}>
						<li className={style.nav_item}>
							<a href='#'>Daily Deals</a>
						</li>
						<li className={style.nav_item}>
							<a href='#'>Brand Outlet</a>
						</li>
						<li className={style.nav_item}>
							<a href='#'>Help & Contact</a>
						</li>
					</ul>
				</div>
				<div className={style.header_top_right}>
					<a className={style.sell} href='#'>Sell</a>
					<select className={style.drop_list}>
						<option value='watchList'>Watchlist</option>
					</select>
					<select className={style.drop_list}>
						<option value='myEbay'>My eBay</option>
					</select>
					<a className={bell} href='#'>
						<img src={bell} alt='bell' />
					</a>
					<a className={style.basket} href='#'>
						<SlBasket color='#000' width='18px'/>
					</a>
				</div>
			</div>
		</>
	);
};
