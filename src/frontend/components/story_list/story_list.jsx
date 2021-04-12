import React, { useEffect, useState } from 'react'
import StoryListItem from './story_list_item'
import { sortByID, sortByComplexity } from '../../util/story_list_sort'

const StoryList = ({ currentUser, stories, fetchStoryList }) => {
  useEffect(() => {
    fetchStoryList()
  }, [])

  const [sortBy, setSortBy] = useState('id')

  const tableHeaders = [
    'id',
    'summary',
    'description',
    'type',
    'complexity',
    'estimatedHrs',
    'cost'
  ]

  const tableHeaderClick = (column) => {
    if (column === 'id' || column === 'complexity') {
      setSortBy(column)
    } else {
      return null
    }
  }

  const storyList = () => {
    if (sortBy === 'complexity') {
      return sortByComplexity(Object.values(stories))
    } else {
      return sortByID(Object.values(stories))
    }
  }

  try {
    return <table>
      <tr>
        {tableHeaders.map(column =>
          <th onClick={() => tableHeaderClick(column)}>
            {column}
          </th>
        )}
      </tr>

      {Object.values(storyList()).map(story =>
        <tr>
          <StoryListItem isAdmin={currentUser.role === 'Admin'} story={story} />
        </tr>)
      }
    </table>
  } catch (error) {
    return null
  }
}

export default StoryList