import React, { useState } from 'react'

const StoryForm = ({ createStory }) => {
  const [summary, setSummary] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState('')
  const [complexity, setComplexity] = useState('')
  const [estTime, setEstTime] = useState('')
  const [cost, setCost] = useState('')

  const handleSubmit = () => {
    createStory({
      summary: summary,
      description: description,
      type: type,
      complexity: parseInt(complexity),
      estTime: estTime,
      cost: cost
    })
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
      <option value='QA'>QA</option>
    </select>
    <select name='complexity' onChange={(e) => setComplexity(e.target.value)}>
      <option selected disabled>Complexity</option>
      <option selected value='Low'>Low</option>
      <option value='Mid'>Mid</option>
      <option value='High'>High</option>
    </select>
    <input placeholder='estTime' name='estTime' onChange={(e) => setEstTime(e.target.value)} />
    <input placeholder='cost' name='cost' onChange={(e) => setCost(e.target.value)} />
    <button onClick={() => handleSubmit()}>Submit</button>
  </div>
}

export default StoryForm