import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 54rem;
  margin: -6rem auto 0;
`

export const Loading = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`
