import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import * as S from './styles'

interface ContentProps {
  content: string
}

export function Content({ content }: ContentProps) {
  return (
    <S.Wrapper>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </S.Wrapper>
  )
}
