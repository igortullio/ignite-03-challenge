import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { dateFormatter } from '../../../../utils/formatter'

import * as S from './styles'

export interface User {
  login: string
  html_url: string
}

export interface Post {
  title: string
  created_at: string
  updated_at: string
  comments: number
  html_url: string
}

export interface SummaryProps {
  user: User
  post: Post
}

export function Summary({ user, post }: SummaryProps) {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Link to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          <S.LinkText>VOLTAR</S.LinkText>
        </S.Link>
        <S.LinkExternal href={post.html_url} target="_blank">
          <S.LinkText>GITHUB</S.LinkText>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </S.LinkExternal>
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
            {dateFormatter.format(new Date(post.created_at))}
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
