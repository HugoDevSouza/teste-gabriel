import Logo from '@/icons/logo.svg'
import Hamburguer from '@/icons/menu.svg'
import S from './style'


const Header = () => {
  return (
    <S.Header>
      <S.ImagemContent>
        <img src={Logo} alt="" />
      </S.ImagemContent>
      <S.ContainerHeader>
        <img src={Hamburguer} alt="" />
        <p>Bem vindo(a), Gabriel</p>
      </S.ContainerHeader>
    </S.Header>
  )
}

export default Header
