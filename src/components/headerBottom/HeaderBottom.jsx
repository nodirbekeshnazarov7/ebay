import style from './HeaderBottom.module.css';
import logo from '../../assets/logo.svg';
import { IoIosSearch } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductService from '../../service/product.service';
export const HeaderBottom = () => {
	const [product, setProduct] = useState();

    const [flexnone, setFlexnone] = useState("none")
	const getProduct = async (e) => {
		const data = await ProductService.getProductSearch(e);
		setProduct(data?.data.products);
	};

	// useEffect(() => {
	// 	getProduct();
	// }, []);
	const handleChange = (e) => {
		console.log(e.target.value);
		getProduct(e.target.value);
        setFlexnone("block")
	};

    const handleClick = () => {
        setFlexnone("none")
    }

	console.log(product);

	return (
		<>
			<div className={style.header_bottom}>
				<div className={style.left_side}>
					<div className={style.logo}>
						<img src={logo} alt='logo' />
					</div>
				</div>
				<div className={style.right_side}>
					<select className={style.category}>
						<option value='shop1'>Shop by category</option>
					</select>
					<div className={style.search_wrapper}>
						<div className={style.search_box}>
							<div className={style.search}>
								<button>
									<IoIosSearch />
								</button>
								<input
									onChange={(e) => handleChange(e)}
									type='search'
									name='search'
									placeholder='Search for anything'
								/>
							</div>
							<select className={style.category}>
								<option value='shop1'>All categories</option>
							</select>

							<div
								style={{
									position: 'absolute',
									top: '50px',
                                    display:`${flexnone}`,
									backgroundColor: '#555',
									width: '100%',
								}}
							>
								<ul
									style={{
										padding: 10,
										display: 'flex',
										flexDirection: 'column',
										height: '400px',
										overflowY: 'scroll',
									}}
								>
									{product?.map((item) => (
										<Link
                                        onClick={() => handleClick()}
											style={{
												marginTop: '10px',
												color: 'white',
												display: 'flex',
												gap: '10px',
											}}
											to={`/product/${item.id}`}
										>
											<img
												style={{
													width: '30px',
													height: '30px',
													borderRadius: '50%',
												}}
												src={item.thumbnail}
												alt=''
											/>
											{item.title}
										</Link>
									))}
								</ul>
							</div>
						</div>
						<button className={style.search_button}>Search</button>
						<a className={style.advanced_search} href='#'>
							Advanced
						</a>
					</div>
				</div>
			</div>
		</>
	);
};
