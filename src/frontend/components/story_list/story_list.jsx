import React, { useEffect, useState } from 'react'
import StoryListItem from './story_list_item'

const StoryList = ({ currentUser, stories, fetchStoryList }) => {
  useEffect(() => {
    fetchStoryList()
  }, [])

  const [sortBy, setSortBy] = useState('id')

  const tableHeaders = [
    'id',
    'estimatedHrs',
    'summary',
    'description',
    'types',
    'complexity',
    'cost'
  ]

  try {
    return <table>
      <tr>
        {tableHeaders.map(column => <th>{column}</th>)}
      </tr>
      {Object.values(stories).map(story => <tr><StoryListItem story={story} /></tr>)}
    </table>
  } catch (error) {
    return null
  }
}

export default StoryList