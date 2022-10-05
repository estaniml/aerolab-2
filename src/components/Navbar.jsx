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
  width: 100vw;
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: hidden;


  @media (min-width: 1024px){
    padding: 40px 120px;
    margin-bottom: 60px;
  }

  > a {
    background-image: url(${logoResponsive});
    background-size: cover;
    width: 38px;
    height: 36px;
    cursor: pointer;
    z-index: 100;
    position: fixed;

    @media (min-width: 1024px){
      background-image: url(${logo});
      width: 100px;
      left: 120px;
    }
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    gap: 16px;
    padding: 8px 16px;
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    z-index: 100;
    position: fixed;
    right: 20px;

    @media (min-width: 1024px){
      right: 120px;
      min-width: 153px;
    }

    > img {
      width: 24px;
      height: 24px;
      transition: 0.2s ease-in-out all;
      transform: ${ ({card}) => card ? 'rotate(180deg)' : 'rotate(0deg)'};
    }

    > p {
      font-weight: 600;
      background: linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }
`

const Chevron = styled.div`
  transform: rotate(270deg);
  transition: 0.2s ease-in-out all;
  transform: ${ ({card}) => card ? 'rotate(90deg)' : 'rotate(270deg)'};
`

export default Navbar