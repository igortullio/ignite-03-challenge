import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import * as S from './styles'

export function Summary() {
  return (
    <S.Wrapper>
      <S.Image src="https://github.com/igortullio.png" alt="" />
      <S.Infos>
        <S.Info>
          <S.Header>
            <S.Title>Igor Túllio</S.Title>
            <S.Link href="https://github.com/igortullio" target="_blank">
              <S.LinkText>GITHUB</S.LinkText>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </S.Link>
          </S.Header>
          <S.Description>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </S.Description>
        </S.Info>

        <S.Tags>
          <S.Tag>
            <FontAwesomeIcon icon={faGithub} />
            igortullio
          </S.Tag>
          <S.Tag>
            <FontAwesomeIcon icon={faUserGroup} />
            20 seguidores
          </S.Tag>
        </S.Tags>
      </S.Infos>
    </S.Wrapper>
  )
}
