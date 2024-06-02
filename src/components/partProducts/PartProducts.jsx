import style from './PartProducts.module.css';
import SeeAll from '../../common/seeAll/SeeAll';
import jordan1 from '../../assets/snickers1.svg';
import { useEffect, useState } from 'react';
import ProductService from '../../service/product.service';
import { Link } from 'react-router-dom';
export const PartProducts = () => {
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
			<div className={style.part_products}>
				<div className={style.container}>
					<div className={style.products}>
						{shortProduct?.map((item) => (
							<Link to={`/product/${item.id}`} className={style.product}>
								<div className={style.product_img}>
									<img style={{ width: 100 }} src={item?.thumbnail} alt='' />
								</div>
								<div className={style.product_info}>
									<p>{item.title}</p>
									<p>{item.category}</p>
								</div>
							</Link>
						))}
					</div>
				</div>
				<div className={style.big_container}>
					<Link to={`/products`}>
						<SeeAll>Score these trending kicks</SeeAll>
					</Link>
				</div>
			</div>
		</>
	);
};
