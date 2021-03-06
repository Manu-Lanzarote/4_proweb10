import styled from "styled-components";

export const HeroContainer = styled.div`
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;
    
    :before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            180deg,
            rgba(0,0,0,0.2) 0%,
            rgba(0,0,0,0.9) 100%,
        ),
        linear-gradient(
            180deg,
            rgba(0,0,0,0.2) 0%,
            transparent 100%
            );  
         ;
         z-index: 2;
    }
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background-color: #232a34;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1100px;
    position: absolute;
    padding: 0px 2rem;
    display: flex;
    flex-direction: column;
    align-items: left;

    h1{
        color: #f6c6fb;
        font-size: 3rem;
        text-align: center;
        text-shadow: 1px 1px 5px black;
    }

    h2{
        color: #f6c6fb;
        font-size: 2.5rem;
        text-align: center;
        text-shadow: 1px 1px 5px black;
    }

    p{
        color: white;
        margin: 2rem 0 3rem 0;
        font-size: 2rem;
        text-align: center;
        text-shadow: 1px 1px 5px black;
    }

    @media screen and (max-width: 768px){
        align-items: center;
        margin-top: 2rem;

        h1{
            font-size: 2.5rem;
        }
        h2{
            font-size: 2rem;
        }
        p{
            font-size: 1.5rem;
        }
    }
`
