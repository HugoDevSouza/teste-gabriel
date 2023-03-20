import S from './style'
import Social from '@/icons/Social.svg'
import Midia from '@/icons/Prancheta.svg'
import Vector from '@/icons/Vector.png'
import Engrenagem from '@/icons/Engrenagem.svg'

const BarraLateral = () => {
    return (
        <S.ContainerLateral>
                <S.Content>
                <S.Image src={Social} alt="" />
                <S.Image src={Midia} alt="" />
                <S.Image src={Vector} alt="" />
                <S.Image src={Engrenagem} alt="" />
            </S.Content>
        </S.ContainerLateral>
    )
}

export default BarraLateral