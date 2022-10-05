import { useEffect, useState } from 'react'
import styled from 'styled-components'

const SortBy = ({filteredItems, setFilteredItems, option, setOption}) => {    

    useEffect(() => {
        switch (option) {
            case 'HIGH':
                const high = [...filteredItems].sort((a, b) => b.cost - a.cost);
                setFilteredItems(high); 
                break;
            case 'LOW':
                const low = [...filteredItems].sort((a, b) => a.cost - b.cost);
                setFilteredItems(low);
                break;
            case 'RECENT':
                setFilteredItems(filteredItems);
                break;
            default:
                break;
        }
    }, [option]);

  return (
    <Tab>
        <Button selected={option} onClick={() => setOption('RECENT')}>
            <p>Most Recent</p>
        </Button>
        <Button selected={option} onClick={() => setOption('LOW')}> 
            <p>Lowest Price</p>
        </Button>
        <Button selected={option} onClick={() => setOption('HIGH')}> 
            <p>Highest Price</p>
        </Button>
    </Tab>
  )
}


const Tab = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 60px;
    overflow-x: scroll;

    @media (min-width: 1024px){
        overflow-x: hidden;
        width: 100%;
    }
`

const Button = styled.button`
    background: ${({selected}) => selected ? 'linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)' : '#E6F0FF'};
    border: none;
    border-radius: 12px;
    padding: 8px 16px;
    max-height: 42px;
    min-width: 140px;
    cursor: pointer;

    &:nth-child(1){
      background: ${({selected}) => selected === 'RECENT' ? 'linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)' : '#E6F0FF'};

      > p {
        color: ${({selected}) => selected !== 'RECENT' && '#E6F0FF'};
        background: ${({selected}) => selected && 'linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)'};
        -webkit-background-clip: text;
        -webkit-text-fill-color: ${({selected}) => selected !== 'RECENT' && 'transparent'};
      }
    }

    &:nth-child(2){
      background: ${({selected}) => selected === 'LOW' ? 'linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)' : '#E6F0FF'};
      
      > p {
        color: ${({selected}) => selected !== 'LOW' && '#E6F0FF'};
        background: ${({selected}) => selected && 'linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)'};
        -webkit-background-clip: text;
        -webkit-text-fill-color: ${({selected}) => selected !== 'LOW' && 'transparent'};
      }
    }

    &:nth-child(3){
      background: ${({selected}) => selected === 'HIGH' ? 'linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)' : '#E6F0FF'};
      
      > p {
        color: ${({selected}) => selected !== 'HIGH' && '#E6F0FF'};
        background: ${({selected}) => selected && 'linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)'};
        -webkit-background-clip: text;
        -webkit-text-fill-color: ${({selected}) => selected !== 'HIGH' && 'transparent'};
      }
    }

    > p {
        margin: 0;
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
        color: ${({selected}) => selected && '#E6F0FF'};
        background: ${({selected}) => !selected && 'linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)'};
        -webkit-background-clip: text;
        -webkit-text-fill-color: ${({selected}) => !selected && 'transparent'};
        background-clip: text;
        text-fill-color: transparent;
    }
`

export default SortBy