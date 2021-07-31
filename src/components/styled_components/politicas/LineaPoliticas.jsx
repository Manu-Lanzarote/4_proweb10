import {useState} from 'react'
import { Main, Container, Button, Hearth } from './LineaPoliticasCss';

//Importo el componente Modal
import ModalLegal from './modales_politicas/ModalLegal'
import ModalCookies from './modales_politicas/ModalCookies'
import ModalPrivacidad from './modales_politicas/ModalPrivacidad'

const LineaPoliticasFooter = () => {
  //Modales de las políticas
  const [showModal1, setShowModal1] = useState(false)
  const [showModal2, setShowModal2] = useState(false)
  const [showModal3, setShowModal3] = useState(false)

  const openModal1 = () => {
    setShowModal1(prev => !prev);
  }
  const openModal2 = () => {
    setShowModal2(prev => !prev);
  }
  const openModal3 = () => {
    setShowModal3(prev => !prev);
  }
  
    return (
        <Main>
        <span>
            @{new Date().getFullYear()} ProWeb 10 - Todos los derechos reservados
        </span>
        <Container>
            <Button onClick={openModal1}>Aviso legal</Button>
            <ModalLegal showModal={showModal1} setShowModal={setShowModal1}/>
            <Button onClick={openModal2}>Politica de privacidad</Button>
            <ModalPrivacidad showModal={showModal2} setShowModal={setShowModal2}/>
            <Button onClick={openModal3}>Politica de cookies</Button>
            <ModalCookies showModal={showModal3} setShowModal={setShowModal3}/>
        </Container>
        <br/>
        <span>
            Diseñado con <Hearth/> por <a href='https://proweb10.com' target='_blank' rel='noreferrer'>https://proweb10.com</a>
        </span>
        </Main>
    )
}

export default LineaPoliticasFooter;
