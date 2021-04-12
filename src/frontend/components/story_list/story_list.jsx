import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const StoryList = ({ currentUser, storyList, fetchStoryList }) => {
  const history = useHistory()
  useEffect(() => {
    fetchStoryList()
  }, [])

  try {
    return <div>
      {Object.values(storyList).map(story => <p>{story.summary}</p>)}
    </div>
  } catch (error) {
    history.push('/createStory')
  }
}

export default StoryList