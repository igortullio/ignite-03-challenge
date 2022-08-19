import { useEffect, useState } from 'react'

import { Summary, UserProps } from './components/Summary'
import { Form } from './components/Form'
import { Card } from './components/Card'
import { api } from '../../libs/axios'

import * as S from './styles'

export function Home() {
  const [user, setUser] = useState<UserProps | null>(null)

  useEffect(() => {
    async function fetchUserInfo() {
      const response = await api.get('/users/igortullio')
      setUser(response.data)
    }

    fetchUserInfo()
  }, [])

  if (!user) {
    return <S.Loading>Loading...</S.Loading>
  }

  return (
    <S.Wrapper>
      <Summary user={user} />

      <S.FormContainer>
        <S.FormHeader>
          Publicações
          <S.FormHeaderInfo>6 publicações</S.FormHeaderInfo>
        </S.FormHeader>
        <Form />
      </S.FormContainer>

      <S.Cards>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </S.Cards>
    </S.Wrapper>
  )
}
