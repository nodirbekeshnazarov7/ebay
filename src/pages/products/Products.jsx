import style from './Products.module.css';
import event from '../../assets/event.svg';
import product1 from '../../assets/snickers1.svg';
import { useEffect, useState } from 'react';
import ProductService from '../../service/product.service';
import { Link } from 'react-router-dom';
export const Products = () => {
	const [product, setProduct] = useState();

	const getProduct = async () => {
		const data = await ProductService.getProduct();
		setProduct(data?.data.products);
	};

	useEffect(() => {
		getProduct();
	}, []);
	return (
		<>
			<div className={style.event}>
				<div className={style.container}>
					<h3>Featured Event</h3>
					<img src={event} alt='event' />
					<p>Up to 60% off Apple tech</p>
					<span>Save on AirPods, iPhones, and more.</span>
				</div>
			</div>
			<div className={style.products}>
				<div className={style.container}>
					<div className={style.product_box}>
						{product?.map((item) => (
							<Link to={`/product/${item.id}`} className={style.product}>
								<div className={style.product_img}>
									<img style={{ width: 100 }} src={item.thumbnail} alt='product1' />
								</div>
								<div className={style.product_info}>
									{item.title} - {item.warrantyInformation}
								</div>
								<div className={style.price}>${item.price}</div>
								<div className={style.old_price}>
									Was: <span>${item.discountPercentage}</span>
								</div>
								<div className={style.type}>{item.shippingInformation}</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</>
	);
};
