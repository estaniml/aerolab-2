import { useContext, useState } from 'react'
import styled from 'styled-components'
import aerologo3 from '../assets/icons/aeropay-3.svg'
import { MyContext } from '../context/MyContext'

const AddPoints = () => {

    const [amount, setAmount] = useState(1)
    const {setPoints, loading} = useContext(MyContext);

    const addPoints = e => {
        e.preventDefault();
        
        if(!loading) {
            setPoints(amount);
        }
    }
  
  return (
    <Form onSubmit={addPoints}>
        <ul>
            <Li quantity={amount} onClick={() => setAmount(1000)}>
                <p>1000</p>
            </Li>
            <Li quantity={amount} onClick={() => setAmount(5000)}>
                <p>5000</p>
            </Li>
            <Li quantity={amount} onClick={() => setAmount(7500)}>
                <p>7500</p>
            </Li>
        </ul>
        <Button type='submit'>
            <img src={aerologo3} alt='aeropay logo' />
            <p>Add Points</p>
        </Button>
    </Form>
  )
}

const Form = styled.form`
    > ul {
        display: flex;
        gap: 10px;
        min-width: 100%;
        height: 100%;
        padding: 0;
    }

`

const Li = styled.li`
    width: 100%;
    padding: 8px 16px;
    background: #E6F0FF;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    

    &:nth-child(1){
         background: ${({quantity}) => quantity === 1000 
            ? 'linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)' : '#E6F0FF'
        };

    > p {
            color: ${({quantity}) => quantity !== 1000 && '#E6F0FF'};
            background: ${({quantity}) => quantity && 'linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)'};
            -webkit-background-clip: text;
            -webkit-text-fill-color: ${({quantity}) => quantity !== 1000 && 'transparent'};
        }
    }

    &:nth-child(2){
    background: ${({quantity}) => quantity === 5000 ? 'linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)' : '#E6F0FF'};
    
    > p {
        color: ${({quantity}) => quantity !== 5000 && '#E6F0FF'};
        background: ${({quantity}) => quantity && 'linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)'};
        -webkit-background-clip: text;
        -webkit-text-fill-color: ${({quantity}) => quantity !== 5000 && 'transparent'};
    }
    }

    &:nth-child(3){
    background: ${({quantity}) => quantity === 7500 ? 'linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)' : '#E6F0FF'};
    
        > p {
            color: ${({quantity}) => quantity !== 7500 && '#E6F0FF'};
            background: ${({quantity}) => quantity && 'linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)'};
            -webkit-background-clip: text;
            -webkit-text-fill-color: ${({quantity}) => quantity !== 7500 && 'transparent'};
        }
    }

    > p {
        margin: 0;
        text-align: center;
        color: ${({quantity}) => quantity && '#E6F0FF'};
        font-size: 16px;
        font-weight: 600;
        line-height: 150%;
        background-clip: text;
        text-fill-color: transparent;
    }

`

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    width: 100%;
    height: 50px;
    padding: 12px 16px;
    font-size: 18px;
    font-weight: 600;
    line-height: 150%;
    color: #FFFFFF;
    background: ${({theme}) => theme.gradientBg};
    border: none;
    border-radius: 16px;
    box-shadow: ${({theme}) => theme.buttons.btnShadow};
    transition: 1.3s ease-in-out all;
    cursor: pointer;

    &:hover{
        background: ${({theme}) => theme.buttons.btnHover};
    }
`

export default AddPoints