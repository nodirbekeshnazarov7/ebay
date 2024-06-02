import style from './Hero.module.css'
import { FaArrowRight } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import callaway from '../../assets/Callaway.png'
import merrell from '../../assets/Merrell.png'
import specialized from '../../assets/Specialized.png'

export const Hero = () => {
  return (
    <>
        <div className={style.hero}>
            <div className={style.container}>
                <div className={style.hero_box}>
                    <div className={style.left_side}>
                        <h1>Super savings at the Brand Outlet</h1>
                        <h3>Up to 60% off the brands you love.</h3>
                        <a href="#" className={style.shop}>Shop now <FaArrowRight /></a>
                    </div>
                    <div className={style.right_side}>
                        <div className={style.card}>
                            <div className={style.card_head}>
                                <a href="#"><span>Callaway</span> <IoMdArrowForward /></a>
                            </div>
                            <div className={style.card_body}>
                                <img src={callaway} alt="callaway" />
                            </div>
                        </div>
                        <div className={style.card}>
                            <div className={style.card_head}>
                                <a href="#"><span>Merrell</span> <IoMdArrowForward /></a>
                            </div>
                            <div className={style.card_body}>
                                <img src={merrell} alt="Merrell" />
                            </div>
                        </div>
                        <div className={style.card}>
                            <div className={style.card_head}>
                                <a href="#"><span>Specialized</span> <IoMdArrowForward /></a>
                            </div>
                            <div className={style.card_body}>
                                <img src={specialized} alt="Specialized" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
