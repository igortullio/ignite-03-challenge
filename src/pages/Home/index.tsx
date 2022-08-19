import { useEffect, useState } from 'react'

import { Summary, User } from './components/Summary'
import { Form } from './components/Form'
import { Card } from './components/Card'
import { api } from '../../libs/axios'

import * as S from './styles'

interface Issue {
  id: number
  title: string
  body: string
  updated_at: string
  url: string
}

export function Home() {
  const [user, setUser] = useState<User | null>(null)
  const [issues, setIssues] = useState<Issue[]>([])

  async function fetchUserInfo() {
    const response = await api.get('/users/igortullio')
    setUser(response.data)
  }

  async function fetchIssues(search?: string) {
    const response = await api.get('/search/issues', {
      params: {
        q: `repo:igortullio/ignite-03-challenge%20${search}`,
      },
    })
    setIssues(response.data.items)
  }

  useEffect(() => {
    fetchUserInfo()
    fetchIssues()
  }, [])

  if (!user || !issues) {
    return <S.Loading>Loading...</S.Loading>
  }

  return (
    <S.Wrapper>
      <Summary user={user} />

      <S.FormContainer>
        <S.FormHeader>
          Publicações
          <S.FormHeaderInfo>{issues.length} publicações</S.FormHeaderInfo>
        </S.FormHeader>
        <Form />
      </S.FormContainer>

      <S.Cards>
        {issues.map((issue) => (
          <Card key={issue.id} {...issue} updatedAt={issue.updated_at} />
        ))}
      </S.Cards>
    </S.Wrapper>
  )
}
