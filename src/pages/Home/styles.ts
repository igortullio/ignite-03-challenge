import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 54rem;
  margin: -6rem auto 0;
`

export const FormContainer = styled.div`
  margin: 3rem 0;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const FormHeader = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-weight: ${theme.font.weights.bold};
    font-size: ${theme.font.sizes[4]};
    color: ${theme.colors.subtitle};
  `}
`

export const FormHeaderInfo = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.font.weights.regular};
    font-size: ${theme.font.sizes[2]};
    color: ${theme.colors.span};
  `}
`

export const Cards = styled.ul`
  margin-bottom: 3rem;

  display: grid;
  grid-template-columns: repeat(auto-fill, 26rem);
  row-gap: 2rem;
  justify-content: space-between;
`

export const Loading = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`
