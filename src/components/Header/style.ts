import styled from 'styled-components'

export const HeaderCont = styled.header`
  height: 96px;

  @media screen and (max-width: 768px) {
    display: none;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
`
export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    height: 70px;
  }
`
export const HeaderOptions = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    padding: 8px;
    margin: 26px;
    gap: 6px;

    list-style: none;
    font-weight: 700;

    position: relative;
  }
`
export const HeaderIcons = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  list-style: none;

  gap: 16px;
`
