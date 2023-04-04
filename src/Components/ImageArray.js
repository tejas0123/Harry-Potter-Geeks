import React from 'react'
import { StyledImageArray } from '../styled/ImageArray.styled'
function ImageArray() {
  return (
    <StyledImageArray>
      
        <div class="card" style={{"width": "22rem", "backgroundColor":"#ae0001", "color":"gold"}}>
          <img class="card-img-top" src={require('../images/gryffindor.png')} alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">Gryffindor</h5>
            <p class="card-text">Gryffindor house is where you would find the pluckiest and most daring students (there’s a reason the house symbol is the brave lion). The house colours are scarlet and gold, the common room lies up in Gryffindor Tower and the Head of House is Professor Minerva McGonagall.If the Sorting Hat placed you here, you would have demonstrated qualities like courage, bravery and determination.</p>
            <a href="#">Read more</a>
          </div>
        </div>
        <div class="card" style={{"width": "20rem","backgroundColor":"#ecb939", "color":"black"}}>
          <img class="card-img-top" src={require('../images/hufflepuff.png')} alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">Hufflepuff</h5>
            <p class="card-text">Hufflepuff is where you will find the most trustworthy and hardworking students. In fact, out of all the houses Hufflepuff has produced the least number of dark witches and wizards. The badger is the symbol of this house, the colours are yellow and black, the Head of House is Professor Pomona Sprout and the common room can be found near the kitchens in Hogwarts.

There is an idea that Hufflepuffs are the least clever of all Hogwarts students – but that is not true.</p>
            <a href="#">Read more</a>
          </div>
        </div>
        <div class="card" style={{"width": "20rem", "backgroundColor":"#222f5b", "color":"#CD7F32"}}>
          <img class="card-img-top" src={require('../images/ravenclaw.png')} alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">Ravenclaw</h5>
            <p class="card-text">If you are looking for the brainiest students – you would find them in Ravenclaw (with a couple of notable exceptions like Hermione Granger). The Ravenclaw colours are blue and bronze, the emblem is an eagle, the Head of House is Professor Filius Flitwick and the common room sits at the top of Ravenclaw Tower behind an enchanted knocker.

The Sorting Hat would only put you in this house if you demonstrated excellent wisdom, wit and a skill for learning.</p>
            <a href="#">Read more</a>
          </div>
        </div>
        <div class="card" style={{"width": "20rem", "backgroundColor":"#1a472a", "color":"silver"}}>
          <img class="card-img-top" src={require('../images/slytherin.png')} alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">Slytherin</h5>
            <p class="card-text">The house colours for Slytherin are silver and emerald green and the emblem is a serpent. The Head of House is Professor Severus Snape, and the common room can be found down in the dungeons under the lake (which only adds to the Slytherin air of mystery).

If the Sorting Hat placed you in this noble house, then you are most likely ambitious, shrewd and possibly destined for greatness.</p>
            <a href="#">Read more</a>
          </div>
        </div>
    </StyledImageArray>
  )
}

export default ImageArray
