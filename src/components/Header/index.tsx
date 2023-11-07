import { HeaderCont, HeaderOptions, LogoBox, HeaderIcons } from './style'
import LogoImg from './../../assets/logo-nike.png'
import { ShoppingCart, MagnifyingGlass } from '@phosphor-icons/react'

export const Header = () => {
  return (
    <HeaderCont>
      <nav>
        <LogoBox>
          <img src={LogoImg} alt="Logotipo" />
        </LogoBox>
        <HeaderOptions>
          <li>Products</li>
          <li>Praising</li>
          <li>About us</li>
          <li>FAQS</li>
        </HeaderOptions>
        <HeaderIcons>
          <li>
            <ShoppingCart size={28} color="#484848" weight="fill" />
            <span className="cart_amount" />
          </li>
          <li>
            <MagnifyingGlass size={28} color="#484848" />
          </li>
        </HeaderIcons>
      </nav>
    </HeaderCont>
  )
}
