import leftEffect from '../../assets/header-effect-left.svg'
import rightEffect from '../../assets/header-effect-right.svg'
import logo from '../../assets/logo.svg'

import * as S from './styles'

export function Header() {
  return (
    <S.Wrapper>
      <img src={leftEffect} alt="" />
      <img src={logo} alt="" />
      <img src={rightEffect} alt="" />
    </S.Wrapper>
  )
}
