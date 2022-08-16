import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 54rem;
  margin: 0 auto;

  section:nth-child(1) {
    margin-top: -6rem;
  }
`

export const FormContainer = styled.div`
  margin: 4.5rem 0 3rem;

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
