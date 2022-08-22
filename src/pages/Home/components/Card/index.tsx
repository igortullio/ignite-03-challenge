import { useNavigate } from 'react-router-dom'

import * as S from './styles'

export interface CardProps {
  number: number
  title: string
  body: string
  updatedAt: string
}

export function Card({ number, title, body, updatedAt }: CardProps) {
  const navigate = useNavigate()

  return (
    <S.Wrapper onClick={() => navigate(`/post/${number}`)}>
      <S.Header>
        {title}
        <S.HeaderInfo>{updatedAt}</S.HeaderInfo>
      </S.Header>
      <S.Content>{body}</S.Content>
    </S.Wrapper>
  )
}
