import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.profile};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  `}
`

export const Header = styled.header`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Link = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${theme.colors.blue};

    text-transform: uppercase;
    text-decoration: none;
  `}
`

export const LinkText = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes[1]};
    font-weight: ${theme.font.weights.bold};
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-weight: ${theme.font.weights.bold};
    font-size: ${theme.font.sizes[6]};
    line-height: ${theme.font.heights.default};
  `}
`

export const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-self: baseline;
  gap: 2rem;
`

export const Tag = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      width: 18px;
      height: 18px;
      color: ${theme.colors.label};
    }
  `}
`
