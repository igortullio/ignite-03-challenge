import { Summary } from './components/Summary'

import * as S from './styles'

export function Post() {
  return (
    <S.Wrapper>
      <Summary
        user={{ login: 'igortullio', html_url: 'test' }}
        post={{ title: 'Title', comments: 5, published_at: '2022/08/22' }}
      />
    </S.Wrapper>
  )
}
