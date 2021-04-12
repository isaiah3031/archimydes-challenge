import React from 'react'

const StoryListItem = ({ story }) => {
  const { id, summary, description, type, complexity, estimatedHrs, cost } = story
  const row = { id, summary, description, type, complexity, estimatedHrs, cost }

  return <>
    {Object.values(row).map(col => <td>{col}</td>)}
  </>
}

export default StoryListItem