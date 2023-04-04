import styled from 'styled-components'

export const StyledNavbar = styled.nav`
    background-color:#121212;
    color:gold;
    display:flex;
    align-items:center;
    justify-content:center;
    height:120px;
    background-color:black;
    h1{
        color:gold;
        font-family: 'Berkshire Swash', cursive;
        font-size:40px;
        text-transform-lowercase;
    }
    a{
        color:crimson;
        text-decoration:none;
        margin:0 1rem;
        font-size:17px;   
    }
    a:hover{
        color:darkred;
        transition:0.3s;
    }

`
