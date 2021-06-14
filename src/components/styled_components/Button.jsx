import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Button = styled(Link)`
    font-size: 1.2rem;
    font-weight: 700;
    background-color: '#635C93';
    white-space: nowrap;
    outline: none;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    padding: 10px 15px;
    color: #111111;
    background-color: #f6c6fb;
    box-shadow: 1px 1px 5px black;
    &:hover{
    background-color: white;
    transition: 0.6s;
    }
`;