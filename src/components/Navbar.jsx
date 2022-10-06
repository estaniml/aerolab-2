import { useContext } from 'react'
import { MyContext } from '../context/MyContext'
import styled from 'styled-components'
import Coin from './loaders/Coin'
import logo from '../assets/icons/aerolab-logo-1.svg'
import logoResponsive from '../assets/icons/aerolab-logo-2.svg'
import chevronDefault from '../assets/icons/chevron-default.svg'

const Navbar = ({card, setCard}) => {

  const {data, loading} = useContext(MyContext);

  return (
    <Nav>
        <a href='#'></a>
        <div onClick={() => setCard(!card)}>
            {!loading ? <img src='/favicon.svg' alt='Aerolab Logo' /> : <Coin />}
            <p>{data.points}</p>
            <Chevron card={card}>
              <img src={chevronDefault} />
            </Chevron>
        </div>
    </Nav>
  )
}

const Nav = styled.nav`
  overflow-x: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding: 40px 20px;


  @media (min-width: 1024px){
    margin-bottom: 60px;
    padding: 40px 120px;
  }

  > a {
    position: fixed;
    z-index: 100;
    width: 38px;
    height: 36px;
    background-image: url(${logoResponsive});
    background-size: cover;
    cursor: pointer;

    @media (min-width: 1024px){
      width: 100px;
      left: 120px;
      background-image: url(${logo});
    }
  }

  > div {
    position: fixed;
    right: 20px;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    height: 40px;
    padding: 8px 16px;
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
    cursor: pointer;

    @media (min-width: 1024px){
      right: 120px;
      min-width: 153px;
    }

    > img {
      width: 24px;
      height: 24px;
      transform: ${ ({card}) => card ? 'rotate(180deg)' : 'rotate(0deg)'};
      transition: 0.2s ease-in-out all;
    }

    > p {
      background: ${({theme}) => theme.gradientBg};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      font-weight: 600;
    }
  }
`

const Chevron = styled.div`
  transform: ${ ({card}) => card ? 'rotate(90deg)' : 'rotate(270deg)'};
  transition: 0.2s ease-in-out all;
`

export default Navbar