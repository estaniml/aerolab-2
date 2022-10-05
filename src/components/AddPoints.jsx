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
        <Btn type='submit'>
            <img src={aerologo3} alt='aeropay logo' />
            <p>Add Points</p>
        </Btn>
    </Form>
  )
}

const Form = styled.form`
    > ul {
        padding: 0;
        display: flex;
        gap: 10px;
        min-width: 100%;
        height: 100%;
    }

`

const Li = styled.li`
    background: ${({quantity}) => quantity ? 'linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)' : '#E6F0FF'};
    border: none;
    border-radius: 12px;
    padding: 8px 16px;
    width: 100%;
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
        text-align: center;
        margin: 0;
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
        color: ${({quantity}) => quantity && '#E6F0FF'};
        background-clip: text;
        text-fill-color: transparent;
    }

`

const Btn = styled.button`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    gap: 8px;
    background: linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%);
    border: none;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
    border-radius: 16px;
    font-weight: 600;
    font-size: 18px;
    line-height: 150%;
    color: #FFFFFF;
    cursor: pointer;
    transition: 1.3s ease-in-out all;

    &:hover{
        background: linear-gradient(102.47deg, #1667D9 -5.34%, #F279F2 106.58%);
    }
`

export default AddPoints