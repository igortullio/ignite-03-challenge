import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 2.5rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    a {
      color: ${theme.colors.blue};
    }

    pre {
      background: ${theme.colors.post};
      border-radius: 2px;
      padding: 1rem;
    }
  `}
`
