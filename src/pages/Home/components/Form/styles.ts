import styled, { css } from 'styled-components'

export const Wrapper = styled.form``

export const Input = styled.input`
  ${({ theme }) => css`
    height: 3.125rem;
    width: 100%;
    padding: 12px 16px;
    background: ${theme.colors.input};
    border: 1px solid ${theme.colors.border};
    border-radius: 6px;
    color: ${theme.colors.text};

    &::placeholder {
      color: ${theme.colors.label};
    }
  `}
`
