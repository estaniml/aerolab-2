import styled from 'styled-components'
import githubDefault from '../assets/icons/github-default.svg'
import githubActive from '../assets/icons/github-active.svg'
import { useState } from 'react'

const Footer = () => {

  const [hover, setHover] = useState(false)
  return (
    <Foot
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
        <Gitlogo 
          hov={hover}
        >
        </Gitlogo>
        <A 
          hov={hover}
          href='https://github.com/estaniml/aerolab-2'
          target="_blank"
        >View this repository</A>
    </Foot>
  )
}

const Foot = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
    color: #7C899C;
    gap: 1rem;
    height: 100%;

    @media (min-width: 1024px){
      padding: 0px;
      margin: 80px 40px
    }
`

const Gitlogo = styled.div`
  background-image: ${ ({hov}) => hov ? `url(${githubActive})` : `url(${githubDefault})` };
  width: 24px;
  height: 24px;
`

const A = styled.a`
  position: relative;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%; 
  background: ${ ({hov}) => hov ? `linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)` : '#7C899C'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: color;

    &:hover, &:focus{
      color: #FF80FF;
    }

    &:focus::after, &:hover::after {
        width: 100%;
        left: 0%;
    }
    
    &::after{
        content: "";
        pointer-events: none;
        bottom: -2px;
        left: 50%;
        position: absolute;
        width: 0%;
        height: 1.5px;
        background: ${ ({hov}) => hov ? `linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)` : '#7C899C'};
        transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
        transition-duration: 400ms;
        transition-property: width, left;
    } 
`

export default Footer