import { Banner } from '../../components/banner/Banner';
import { DiscountProducts } from '../../components/discountProducts/DiscountProducts';
import { Hero } from '../../components/hero/Hero';
import { MainCategories } from '../../components/mainCategories/MainCategories';
import { PartProducts } from '../../components/partProducts/PartProducts';

export const MainContent = () => {
  return (
    <>
        <MainCategories/>
        <Hero/>
        <PartProducts/>
        <Banner/>
        <DiscountProducts/>
    </>
  )
}
