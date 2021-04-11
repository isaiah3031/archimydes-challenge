import React, { useState, useEffect } from 'react'

const StoryList = ({ currentUser, storyList, fetchStoryList }) => {
  useEffect(() => {
    fetchStoryList()
  }, [])

  try {
    return <div>
      {Object.values(storyList).map(story => <p>{story.summary}</p>)}
    </div>
  } catch (error) {
    return null
  }
}

export default StoryList