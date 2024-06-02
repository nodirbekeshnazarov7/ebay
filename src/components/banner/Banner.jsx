import style from './Banner.module.css'
import { IoMdArrowForward } from "react-icons/io";
import ebay from '../../assets/ebay.svg'
import banner1 from '../../assets/banner1.svg'
import banner2 from '../../assets/banner2.svg'
export const Banner = () => {
  return (
    <>
        <div className={style.banner}>
            <div className={style.container}>
                <div className={style.banner_wrapper}>
                    <div className={style.banner_left}>
                        <div className={style.banner_card}>
                            <span>featured</span>
                            <img src={ebay} alt="ebay logo" />
                            <h3>Deals made easy all year long.</h3>
                            <p>Free shipping. Best prices.</p>
                            <a href="#">get your thing <IoMdArrowForward size='20px' /></a>
                        </div>
                        <img src={banner1} alt="banner" />
                    </div> 
                    <div className={style.banner_right}>
                        <img src={banner2} alt="banner" />
                    </div> 
                </div>
            </div>
        </div>
    </>
  )
}
