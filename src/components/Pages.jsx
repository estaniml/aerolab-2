import styled from 'styled-components'
import chevronActive from '../assets/icons/chevron-active.svg'
import chevronDisabled from '../assets/icons/chevron-disabled.png'

const Pages = ({nextPage, prevPage, totalPages, page, pagination}) => {

    
  return (
    <Paginator>
        { page  !== 1 ?
            <ButtonActive onClick={prevPage}>
                    <img src={chevronActive} style={{transform: 'rotate(180deg)'}}/>
            </ButtonActive>
            :
            <ButtonDisabled>
                <img src={chevronDisabled}  style={{transform: 'rotate(180deg)'}}/>
            </ButtonDisabled>
        }

        <p>Page <span>{page} of {totalPages}</span></p>
        
        { page !== totalPages && pagination().length > 7 ?
            <ButtonActive onClick={nextPage}>
                    <img src={chevronActive} />
            </ButtonActive>
            :
            <ButtonDisabled>
                <img src={chevronDisabled} />
            </ButtonDisabled>
        }
    </Paginator>
  )
}

const Paginator = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border: 1px solid #E5F0FF;
    border-radius: 16px;
    padding: 12px 16px;
    min-width: 240px;
    max-height: 60px;

    > p {
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
        color: #7C899C;

        > span {
            background: ${({theme}) => theme.gradientBg};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
        }
    }
`

const ButtonActive = styled.button`
    border: none;
    width: 36px;
    height: 36px;
    background: #E5F0FF;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        background: #CCE1FF;
    }
    
`

const ButtonDisabled = styled.button`
    border: none;
    width: 36px;
    height: 36px;
    background: #E6EDF7;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default Pages