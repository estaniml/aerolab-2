import styled, { keyframes } from 'styled-components';



const Coin = () => {
  return (
    <Spin></Spin>
  )
}

const rotation = keyframes`
  to {
    transform: rotate(360deg);
  }

`

const Spin = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50%;

  &::before, &::after{
    content: "";
    position: absolute;
    border-radius: inherit;
  }

  &::before{
    width: 100%;
    height: 100%;
    background-image: linear-gradient(0deg, #176FEB 0%, #FF80FF 100%);
    animation: ${rotation} .5s infinite linear;
  }

  &::after {
    width: 55%;
    height: 55%;
    background-color: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export default Coin;