import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    background: ${theme.colors.profile};
    height: 18.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    img:nth-child(2) {
      margin-top: -6rem;
    }

    img:not(:nth-child(2)) {
      width: 409px;
    }
  `}
`
