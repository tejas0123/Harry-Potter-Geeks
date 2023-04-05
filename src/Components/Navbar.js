import React from 'react'
import { StyledNavbar } from '../styled/Navbar.styled'

function Navbar() {
  return (
    <div>
      <StyledNavbar>
        <a href=''>Hogwarts</a>
        <a href=''>Diagon Alley</a>
        <a href=''>Hogsmeade</a>
        <a href=''><h1>Harry Potter Geeks</h1></a>
        <a href=''>Quiz</a>
        <a href=''>Merchandise</a>
        <a href=''>Characters</a>
        <button type="button" class="btn btn-primary">Sign In</button>
      </StyledNavbar>
    </div>
  )
}

export default Navbar
