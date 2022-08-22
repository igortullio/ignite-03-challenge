import { useNavigate } from 'react-router-dom'

import { dateFormatter } from '../../../../utils/formatter'

import * as S from './styles'

export interface CardProps {
  number: number
  title: string
  body: string
  createdAt: string
}

export function Card({ number, title, body, createdAt }: CardProps) {
  const navigate = useNavigate()

  return (
    <S.Wrapper onClick={() => navigate(`/post/${number}`)}>
      <S.Header>
        {title}
        <S.HeaderInfo>{dateFormatter.format(new Date(createdAt))}</S.HeaderInfo>
      </S.Header>
      <S.Content>{body}</S.Content>
    </S.Wrapper>
  )
}
