import style from './productSingle.module.css';
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// images
import seeSpan from '../../assets/see_span.svg';
import phone1 from '../../assets/phone1.svg';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
// icons 
import { GrPrevious, GrNext  } from "react-icons/gr";
import { useParams } from 'react-router-dom';
import ProductService from '../../service/product.service';

export const ProductSingle = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const {id} = useParams()

  const [product, setProduct] = useState();

	const getProduct = async () => {
		const data = await ProductService.getProductId(id);
		setProduct(data?.data);
	};

	useEffect(() => {
		getProduct();
	}, [id]);

  console.log(product);

	return (
		<>
			<div className={style.single_page}>
				<div className={style.container}>
					<div className={style.top_part}>
						<div className={style.discount_info}>
							EXTRA <span>$10</span> OFF 3+ ITEMS WITH CODE{' '}
							<span>10OFF2023TECH</span>
						</div>
						<a href='#'>
							See all eligible items and terms <img src={seeSpan} alt='span' />
						</a>
					</div>
					<div className={style.product}>
						<div className={style.left_side}>
                <div className={style.product_box}>
                  <img src={product?.thumbnail} alt="phone" />
                  <div className={style.prev}><GrPrevious /></div>
                  <div className={style.next}><GrNext /></div>
                </div>
						</div>
						<div className={style.right_side}>
              <div className={style.product_title}>{product?.title}</div>
              <div className={style.product_info}>
                <div className={style.facilitiy}>
                  <span className={style.type}>Condition</span>
                  <div className={style.info}>
                    <div className={style.fac_title}>Open box</div>
                    <div className={style.text}>“These phones are fully functional and will work on the network you choose. This listing contains ”... <a className={style.more} href="#">Read more</a></div>
                  </div>
                </div>
                <div className={style.facilitiy}>
                  <span className={style.type}>Model: </span>
                  <div className={style.type_box}>{product?.category}</div>
                </div>
                <div className={style.facilitiy}>
                  <span className={style.type}>Carrier: </span>
                  <div className={style.type_box}>Xfinity Locked</div>
                </div>
                <div className={style.facilitiy}>
                  <span className={style.type}>Storage Capacity:</span>
                  <div className={style.type_box}>64 GB</div>
                </div>
                <div className={style.facilitiy}>
                  <span className={style.type}>Color:</span>
                  <div className={style.type_box}>Apple iPhone 11</div>
                </div>
                <div className={style.facilitiy}>
                  <span className={style.type}>Cosmetic</span>
                  <div className={style.type_box}>Black</div>
                </div>
                <div className={style.facilitiy}>
                  <span className={style.type}>Quantity:</span>
                  <div className={style.type_box}>Heavy Use</div>
                </div>
                <div className={style.facilitiy}>
                  <span className={style.type}>Quantity:</span>
                  <input type="text" value={1}/>
                  <div className={style.last}>Last One / 86 sold</div>
                </div>
              </div>
            </div>
					</div>
				</div>
			</div>
		</>
	);
};
