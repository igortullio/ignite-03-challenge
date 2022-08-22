import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Summary, User } from './components/Summary'
import { Content } from './components/Content'
import { api } from '../../libs/axios'

import * as S from './styles'

interface Issue {
  title: string
  html_url: string
  body: string
  created_at: string
  updated_at: string
  comments: number
  user: User
}

export function Post() {
  const { postId } = useParams()
  const [issue, setIssue] = useState<Issue | null>(null)

  const fetchIssue = useCallback(async () => {
    const response = await api.get(
      `/repos/igortullio/ignite-03-challenge/issues/${postId}`,
    )
    setIssue(response.data)
  }, [postId])

  useEffect(() => {
    fetchIssue()
  }, [fetchIssue])

  if (!issue) {
    return <S.Loading>Loading...</S.Loading>
  }

  return (
    <S.Wrapper>
      <Summary user={issue.user} post={issue} />
      <Content content={issue.body} />
    </S.Wrapper>
  )
}
