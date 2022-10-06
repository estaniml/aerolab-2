import styled from 'styled-components'
import chevronActive from '../assets/icons/chevron-active.svg'
import chevronDisabled from '../assets/icons/chevron-default.svg'

const Pages = ({nextPage, prevPage, totalPages, page, pagination}) => {

    
  return (
    <Paginator>
        { page  !== 1 ?
            <ButtonActive onClick={prevPage} title="Next Page Active">
                    <Icon src={chevronActive} style={{transform: 'rotate(180deg)'}} alt='Next Page Active' />
            </ButtonActive>
            :
            <ButtonDisabled title="Next Page Inactive">
                <Icon src={chevronDisabled}  style={{transform: 'rotate(180deg)'}} alt='Next Page Inactive' />
            </ButtonDisabled>
        }

        <p>Page <span>{page} of {totalPages}</span></p>
        
        { page !== totalPages && pagination().length > 7 ?
            <ButtonActive onClick={nextPage} title="Previous Page Active">
                    <Icon src={chevronActive} alt='Previous Page Active' />
            </ButtonActive>
            :
            <ButtonDisabled title="Previous Page Inactive">
                <Icon src={chevronDisabled} alt='Previous Page Inactive' />
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
        color: #677281;

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

const ButtonDisabled = styled(ButtonActive)`
    background: #E6EDF7;
    cursor: default;
    opacity: 0.5;

    &:hover {
        background: #E6EDF7;
    }
`

const Icon = styled.img`
    width: 20px;
    height: 20px;

    @media (min-width: 1400px){
        width: 24px;
        height: 24px;
    }
`

export default Pages