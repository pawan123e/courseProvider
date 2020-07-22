import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Navbar = () => {

    // const [home, setHome] = useState(true);
    // const [register, setRegister] = useState(false);
    // const [course, setCourse] = useState(false);

    const [link, setLink] = useState({
        home: false,
        register: false, 
        course: false,
        video: false
    })
    
    const {home, register, course, video} = link;

    useEffect(() => {
        console.log(window.location.pathname.toString() === '/signUp')
        let path = window.location.pathname.toString();
        if(path === '/') {
            setLink({home: true, register: false, course: false, video: false})
        } else if(path === '/signUp') {
            setLink({home: false, course: false, register: true, video: false})
        } else if(path === '/course') {
            setLink({home: false, register: false, video: false, course: true})
        } else if(path === '/video') {
            setLink({home: false, register: false, video: true, course: false})
        }
    },[window.location.pathname])

    return (
        <NavbarWrap>
            <div className='navbar'>
           <ul className='nav'>
                    <Link to = '/'><li className={home ? 'red' : ''}>Home</li></Link>
                    <Link to = '/course'><li className={course ? 'red' : ''}>Add Course</li></Link>
                    <Link to = '/video'><li className = {video ? 'red' : ''}>Add Video</li></Link>
                    <Link to = '/signUp'><li className={register ? 'red' : ''}>Sign Up</li></Link>
                    <li>Logout</li>
                    {/* <li>Sign Up</li> */}
           </ul>
           </div>
        </NavbarWrap>
    )
}

export default Navbar;

const NavbarWrap = styled.div`
height: 60px;
display: flex;
width: 100%;
margin: auto;
position: fixed;
z-index: 12;
// background: white;
background: #252525;
background: white;
box-shadow: 2px 5px 15px 0px rgba(0,0,0,0.75);
.navbar {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
        margin: 0;
    }
.nav {
    width: 100%;
    margin-left: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        list-style: none;
        a {
            text-decoration: none;
        li {
            color: black;
            cursor: pointer;
            text-decoration: none;

        }
        .red {
            color: red;
        }
    }
    }
}
`