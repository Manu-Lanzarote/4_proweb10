import styled from 'styled-components'
import {BsHeartFill} from 'react-icons/bs'

export const Main = styled.p`
    text-align: center;
    background-color: #010606;
    color: #f6c6fb;
    font-size: 0.8rem;
    padding: 0px 50px 100px;

    a{
        color: #f6c6fb;
    }

    a:hover{
        color: white;
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #010606;
    color: #f6c6fb;
`

export const Button = styled.button`
    background-color: #010606;
    color: #f6c6fb;
    font-size: 0.8rem;
    border: none;
    cursor: pointer;
    padding: 5px 10px;

    &:hover{
        color: white;
    }
`

export const Hearth = styled(BsHeartFill)`
    color: red;
`;