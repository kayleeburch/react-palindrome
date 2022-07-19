import { useState } from 'react'
import SubmitButton from './components/SubmitButton'
import CheckPalindrome from './components/CheckPalindrome'
import './App.css'

function App() {
  const [word, setWord] = useState('')

  const getWord = () => {
    setWord(document.getElementById('word').value)
  }

  return (
    <div className="App">
     <h1>Is it a Palindrome?</h1>
     <h2>Enter a word below...</h2>
     <input
     id="word"
     name="word"
     />
     <SubmitButton handleClick = {getWord} />
     <CheckPalindrome value={word} />
    </div>
  )
}

export default App
