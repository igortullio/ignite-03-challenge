import { Summary } from './components/Summary'
import { Form } from './components/Form'

import * as S from './styles'

export function Home() {
  return (
    <S.Wrapper>
      <Summary />

      <S.FormContainer>
        <S.FormHeader>
          Publicações
          <S.FormHeaderInfo>6 publicações</S.FormHeaderInfo>
        </S.FormHeader>
        <Form />
      </S.FormContainer>
    </S.Wrapper>
  )
}
