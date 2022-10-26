import axios from "axios"
import { useState } from "react"

export default function App () {

  console.log(import.meta.env.VITE_TOKEN)

  const [activity, setActivity] = useState('')
  const [type, setType] = useState('')
  const [catFacts, setCatFacts] = useState('')

  async function getApiAsyncAwait () {
    const bored = await axios.get('https://www.boredapi.com/api/activity')
    const cat = await axios.get('https://catfact.ninja/facts')

    setActivity(bored.data.activity)
    setType(bored.data.type)
    setCatFacts(cat.data.data[0].fact)
  }

  function getApiThenCatch () {
    axios.get('https://www.boredapi.com/api/activity')
      .then(function (result) {
        setActivity(result.data.activity)
        setType(result.data.type)
      })
      .catch((err) => {
        alert('Terjadi kesalahan')
        console.log(err)
      })
  }

  return <>
    <h1>Hi Mom</h1>
    <button onClick={getApiAsyncAwait}>
      Get API
    </button>
    <br /><br />
    <p>activity: {activity}</p>
    <p>type: {type}</p>
    <p>cat fact: {catFacts}</p>
  </>
}