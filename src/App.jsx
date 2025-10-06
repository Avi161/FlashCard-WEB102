import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

import '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ArrowLeft, ArrowRight } from 'lucide-react';

function App() {
  const [count, setCount] = useState(0)
  const [submit, setSubmit] = useState(false)
  const [userGuess, setUserGuess] = useState("")
  const [feedback, setFeedback] = useState("")

  function incrementCount(){
    if (count === cards.length-1){
      setCount(cards.length-1)
    } else {
      setCount(count+1)
    }
  }

  function decrementCount(){
    if (count === 0){
      setCount(0)
    } else {
      setCount(count-1)
    }
  }

  function handleSubmit(e){
    e.preventDefault()
    const correctAnswer = cards[count].answer.toLowerCase()
    const userAnswer = userGuess.toLowerCase()

    if (userAnswer === correctAnswer){
      setFeedback('Correct!!')
    } else {
      setFeedback('Incorrect!! Try again.')
    }
    setSubmit(true)
  }

  function updateChange(e){
    setUserGuess(e.target.value)
  }

  const cards = [
    { question: "Why don’t scientists trust atoms?", answer: "Because they make up everything!" },
    { question: "Why did the math book look sad?", answer: "Because it had too many problems." },
    { question: "Why don’t programmers like nature?", answer: "Too many bugs." },
    { question: "Why was the computer cold?", answer: "It left its Windows open." },
    { question: "Why did the scarecrow win an award?", answer: "Because he was outstanding in his field." },
    { question: "Why did the bicycle fall over?", answer: "Because it was two-tired." },
    { question: "Why can’t your nose be 12 inches long?", answer: "Because then it would be a foot." },
    { question: "Why did the student eat his homework?", answer: "Because the teacher said it was a piece of cake." },
    { question: "Why did the photo go to jail?", answer: "Because it was framed." },
    { question: "Why don’t skeletons fight each other?", answer: "They don’t have the guts." }
  ];
  

  return (
    <>
      <h1>Ulitmate Joke Guesser</h1>
      <p>How good are you in gueessing Jokes? Figure it out.</p>
      <p>Number of cards: 10</p>
      <p className="read-the-docs">
        Guess the Joke
      </p>
      {
        <Card key={count} question={cards[count].question} answer={cards[count].answer} />
      }
      <Button onClick={decrementCount}><ArrowLeft /></Button>
      <Button onClick={incrementCount}><ArrowRight /></Button>
      <form onSubmit={handleSubmit}>
        <TextField variant="outlined" fullWidth
          margin="normal" value={userGuess} onChange={updateChange}></TextField>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>

      {feedback && <p>{feedback}</p>}
    </>
  )
}

export default App
