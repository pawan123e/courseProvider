import React from 'react'
import styled from 'styled-components'
import bgImg from '../images/hero.jpg'

const Hero = () => {
    return (
        <HeroWrap back = {bgImg}>
            <div className='content'>
            <h1>Welcome to the website</h1>
            <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt excepturi maiores culpa similique nostrum, quidem debitis aut quos vel omnis!</h4>
            <button className='btn'>Get Started</button>
            </div>
        </HeroWrap>
    )
}

export default Hero

const HeroWrap = styled.div`
height: 100vh;
background: url(${props => props.back}) no-repeat center center fixed ;
background-size: cover;
position: relative;
display: flex;
align-items: center;
// justify-content: center;
color: white;
::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    z-index: 1;
}
.content {
    z-index: 3;
    width: 90%;
    margin-left: auto;
    h1,h4{
        margin: 0;
        // text-align: center;
        max-width: 50%;
        margin-bottom: 1rem;
    }
    h1 {
        font-size: 3rem;
        letter-spacing: 0.5px;
    }
    h4 {
        color: whitesmoke;
        color: #ddd;
        font-size: 1.2rem;
        letter-spacing: 0.5px;
        margin-bottom: 1.8rem;
    }
    .btn {
        background: skyblue;
        background: #252525;
        color: white;
        // color: black;
        cursor: pointer;
        padding: 0.5rem 1rem;
        // border-radius: 25px;
        border: none;
        font-size: 1rem;
        outline: none;
        transition: all 0.5s ease;
        &:hover {
            opacity: 0.7;
        }
    }
}
`