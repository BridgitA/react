import React from 'react'
import Joke from './Joke'

function App(){
  return(
    <div>
      <Joke 
        question = "What is Whitney Houston’s favorite type of coordination?"
        answer = "HAAANNNNND EYEEEEEEE."
      />
      <Joke
        question = "Why did David Hasselhoff change his name to “The Hoff?”"
        answer = "It’s less hassle." 
      />
      <Joke 
        question = "Why does Waldo wear stripes?"
        answer = "Because he doesn’t want to be spotted."
      />
      <Joke 
        question = "What do you call a sad cup of coffee?"
        answer = "Depresso."
      />
      <Joke 
        question = "What’s green and has wheels?"
        answer = "Grass! I lied about the wheels."
      />
    </div>
  )
}

export default App
