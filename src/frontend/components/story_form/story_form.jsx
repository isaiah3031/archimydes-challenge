import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const StoryForm = ({ createStory }) => {
  const history = useHistory()
  const [summary, setSummary] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState('')
  const [complexity, setComplexity] = useState('')
  const [estimatedHrs, setestimatedHrs] = useState('')
  const [cost, setCost] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    createStory({
      'summary': summary,
      'description': description,
      'type': type,
      'complexity': complexity,
      // 'estimatedHrs': estimatedHrs,
      // 'cost': parseInt(cost)
    }).then(() => history.push('/'))
  }

  return <div>
    <input placeholder='summary' name='summary' onChange={(e) => setSummary(e.target.value)} />
    <textarea
      placeholder='description'
      name='description'
      onChange={(e) => setDescription(e.target.value)}>
    </textarea>
    <select name='type' onChange={(e) =>
      setType(e.target.value)
    }>
      <option selected disabled>type</option>
      <option value='enhancement'>enhancement</option>
      <option value='bugfix'>bugfix</option>
      <option value='development'>development</option>
      <option value='qa'>QA</option>
    </select>
    <select name='complexity' onChange={(e) => setComplexity(e.target.value)}>
      <option selected disabled>Complexity</option>
      <option value='low'>Low</option>
      <option value='mid'>Mid</option>
      <option value='high'>High</option>
    </select>
    <button onClick={(e) => handleSubmit(e)}>Submit</button>
  </div>
}

export default StoryForm