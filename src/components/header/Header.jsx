import { HeaderBottom } from '../headerBottom/HeaderBottom'
import { HeaderTop } from '../headerTop/HeaderTop'
import style from './Header.module.css'
export const Header = () => {
  return (
    <>
        <header>
            <div className={style.container}>
                <HeaderTop/>
                <HeaderBottom/>
            </div>
        </header>
    </>
  )
}
