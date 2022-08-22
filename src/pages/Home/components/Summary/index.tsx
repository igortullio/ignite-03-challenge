import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'

import * as S from './styles'

export interface User {
  login: string
  name: string
  bio: string
  html_url: string
  followers: number
  avatar_url: string
}

export interface SummaryProps {
  user: User
}

export function Summary({ user }: SummaryProps) {
  return (
    <S.Wrapper>
      <S.Image src={user.avatar_url} alt="" />
      <S.Infos>
        <S.Info>
          <S.Header>
            <S.Title>{user.name}</S.Title>
            <S.Link to={user.html_url} target="_blank">
              <S.LinkText>GITHUB</S.LinkText>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </S.Link>
          </S.Header>
          <S.Description>{user.bio}</S.Description>
        </S.Info>

        <S.Tags>
          <S.Tag>
            <FontAwesomeIcon icon={faGithub} />
            {user.login}
          </S.Tag>
          {user.followers > 0 && (
            <S.Tag>
              <FontAwesomeIcon icon={faUserGroup} />
              {user.followers} seguidores
            </S.Tag>
          )}
        </S.Tags>
      </S.Infos>
    </S.Wrapper>
  )
}
