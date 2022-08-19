import * as S from './styles'

export interface CardProps {
  title: string
  body: string
  updatedAt: string
}

export function Card({ title, body, updatedAt }: CardProps) {
  return (
    <S.Wrapper>
      <S.Header>
        {title}
        <S.HeaderInfo>{updatedAt}</S.HeaderInfo>
      </S.Header>
      <S.Content>{body}</S.Content>
    </S.Wrapper>
  )
}
