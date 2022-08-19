import styled, { css } from 'styled-components'

export const Wrapper = styled.li`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    background: ${theme.colors.post};
    padding: 2rem;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    border: 2px solid ${theme.colors.post};
    cursor: pointer;

    width: 26rem;
    height: 16.25rem;

    &::after {
      content: '';
      display: block;
      background-color: ${theme.colors.post};
      height: 2rem;
      width: 100%;
      position: absolute;
      bottom: 0;
    }

    &:hover {
      border: 2px solid ${theme.colors.label};
    }
  `}
`

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    gap: 1.125rem;

    font-weight: ${theme.font.weights.bold};
    font-size: ${theme.font.sizes[5]};
    color: ${theme.colors.title};
  `}
`

export const HeaderInfo = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.font.weights.regular};
    font-size: ${theme.font.sizes[2]};
    color: ${theme.colors.span};
    white-space: nowrap;
  `}
`

export const Content = styled.p`
  text-justify: inter-word;
`
