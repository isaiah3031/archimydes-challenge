import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const StoryList = ({ currentUser, stories, fetchStoryList }) => {
  const history = useHistory()
  useEffect(() => {
    fetchStoryList()
  }, [])

  const tableHeaders = ['id', 'complexity', 'type', 'cost', 'est hours', 'summary', 'description']

  try {
    return <div className='table'>
      {tableHeaders.map(column => <li className={`table-${column}`}>{column}</li>)}
      {Object.values(stories).map(story => <p>{story.summary}</p>)}
    </div>
  } catch (error) {
    return null
  }
}

export default StoryList