import styled from 'styled-components'
import cross from '../assets/icons/cross-default.svg'
import error from '../assets/icons/system-error.svg'
import success from '../assets/icons/system-success.svg'

const Notification = ({notification, removeNotification}) => {

    const {status, productName} = notification;

  return (
        <>
            { status !== '' && 
                (
                    <Message status={status}>
                        <img src={ status === 'success' ? success : error } />
                        
                        { status === 'success' ?
                            <p>
                                <strong>{productName} </strong>
                                redeemed succesfully
                            </p>
                            :
                            <p>There was a problem with the transaction</p>    
                        }

                        <img src={cross} onClick={() => removeNotification(productName)} />
                    </Message>
                )
            }
        </>
    )
}



const Message = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    border: ${ ({status}) => status === 'success' ? '2px solid #29CC74' : '2px solid #E07F4F'} ;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
    border-radius: 16px;
    padding: 24px;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    gap: 23px;

    @media (min-width: 1024px){
        min-width: 520px;
        font-size: 18px;
    }

    > p {
        margin: 0 auto 0px 0px;
    }
`


export default Notification