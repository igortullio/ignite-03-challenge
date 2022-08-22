import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as S from './styles'

export interface User {
  login: string
  html_url: string
}

export interface Post {
  title: string
  published_at: string
  comments: number
}

export interface SummaryProps {
  user: User
  post: Post
}

export function Summary({ user, post }: SummaryProps) {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Link href={user.html_url} target="_blank">
          <FontAwesomeIcon icon={faChevronLeft} />
          <S.LinkText>VOLTAR</S.LinkText>
        </S.Link>
        <S.Link href={user.html_url} target="_blank">
          <S.LinkText>GITHUB</S.LinkText>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </S.Link>
      </S.Header>
      <S.Content>
        <S.Title>{post.title}</S.Title>
        <S.Tags>
          <S.Tag>
            <FontAwesomeIcon icon={faGithub} />
            {user.login}
          </S.Tag>
          <S.Tag>
            <FontAwesomeIcon icon={faCalendarDay} />
            {post.published_at}
          </S.Tag>
          <S.Tag>
            <FontAwesomeIcon icon={faComment} />
            {post.comments} comentários
          </S.Tag>
        </S.Tags>
      </S.Content>
    </S.Wrapper>
  )
}
