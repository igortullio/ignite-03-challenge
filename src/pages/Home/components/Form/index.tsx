import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import * as S from './styles'

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormData = zod.infer<typeof searchFormSchema>

export function Form() {
  const { register, handleSubmit } = useForm<SearchFormData>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      query: '',
    },
  })

  function handleSearch(data: SearchFormData) {}

  return (
    <S.Wrapper onSubmit={handleSubmit(handleSearch)}>
      <S.Input
        id="query"
        type="text"
        placeholder="Buscar conteúdo"
        {...register('query')}
      />
    </S.Wrapper>
  )
}
