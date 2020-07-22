import React from 'react'
import styled from 'styled-components';

const Dashboard = () => {
    return (
        <DashboardWrap>
           <h1 style = {{margin: '0'}}>Welcome to the portal.</h1> 

        </DashboardWrap>
    )
}

export default Dashboard

const DashboardWrap = styled.div`
// background: white;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;

h1 {
    font-size: 4rem;
    color: white;
}
`
