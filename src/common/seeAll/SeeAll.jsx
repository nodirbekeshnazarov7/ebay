import style from './SeeAll.module.css';
import { IoMdArrowForward } from "react-icons/io";

const SeeAll = ({children}) => {
	return (
		<div className={style.scoring}>
			<div className={style.scoring_title}>
				{children}
			</div>
			<a href='#' className={style.see_all}>
				See all <IoMdArrowForward />
			</a>
		</div>
	);
};
export default SeeAll
