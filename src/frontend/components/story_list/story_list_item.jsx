import React from 'react'
import { useHistory } from 'react-router-dom'
import './table.scss'

const StoryListItem = ({ story, isAdmin }) => {
  const history = useHistory()
  const { id, summary, description, type, complexity, estimatedHrs, cost } = story
  const row = { id, summary, description, type, complexity, estimatedHrs, cost }

  const rowColor = () => {
    if (story.status === undefined || !isAdmin) return ''
    return story.status === 'rejected' ? 'row-red' : 'row-green'
  }
  try {
    if (!isAdmin) return false
    return <>
      {Object.values(row).map(col => <td
        key={Math.random(15)}
        onClick={() => { isAdmin && history.push(`/story/${story.id}`) }}
        className={`${rowColor()}`}>
        {col}
      </td>)}
    </>
  } catch (error) {
    return null
  }

}

export default StoryListItem