import style from './DiscountProducts.module.css';
import SeeAll from '../../common/seeAll/SeeAll';
import { IoMdArrowForward } from 'react-icons/io';
import product1 from '../../assets/snickers1.svg'
import { useEffect, useState } from 'react';
import ProductService from '../../service/product.service';
import { Link } from 'react-router-dom';

export const DiscountProducts = () => {
    const [product, setProduct] = useState();

	const getProduct = async () => {
		const data = await ProductService.getProduct();
		setProduct(data?.data.products);
	};

	useEffect(() => {
		getProduct();
	}, []);
	const shortProduct = product?.slice(0, 6);
	return (
		<>
			<div className={style.discount_products}>
				<div className={style.container}>
				<div className={style.big_container}>
				<div className={style.big_container}>
					<Link to={`/products`}>
						<SeeAll>Today's Deals – All With Free Shipping</SeeAll>
					</Link>
				</div>
				</div>
					<div className={style.products}>
                        {shortProduct?.map(item => <div className={style.product}>
                            <div className={style.product_img}>
                                <img style={{width:100}} src={item.thumbnail} alt="product1" />
                            </div>
                            <div className={style.price}>${item.price}</div>
                            <div className={style.old_price}>
                                <span className={style.value}>${item.discountPercentage}</span> 
                                <span className={style.point}> · </span> 
                                <span className={style.percent}>${item.stock}% OFF</span>
                            </div>
                        </div>)}
                       
                    </div>
				</div>
			</div>
		</>
	);
};
