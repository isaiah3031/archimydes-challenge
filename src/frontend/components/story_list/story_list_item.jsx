import React from 'react'
import './table.scss'

const StoryListItem = ({ story, isAdmin }) => {
  const { id, summary, description, type, complexity, estimatedHrs, cost } = story
  const row = { id, summary, description, type, complexity, estimatedHrs, cost }

  const rowColor = () => {
    if (story.status === undefined || !isAdmin) return ''
    return story.status ? 'row-red' : 'row-green'
  }

  return <>
    {Object.values(row).map(col => <td className={`${rowColor()}`}>{col}</td>)}
  </>
}

export default StoryListItem