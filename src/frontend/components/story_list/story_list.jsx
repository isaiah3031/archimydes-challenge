import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import StoryListItem from './story_list_item'
import { sortByID, sortByComplexity } from '../../util/story_list_sort'
import './table.scss'
const StoryList = ({ currentUser, stories, fetchStoryList }) => {
  useEffect(() => {
    fetchStoryList()
  }, [])

  const history = useHistory()
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

    return <>
      <h2>Story List</h2>
      <table>
        <thead>
          {<tr>
            {tableHeaders.map(column =>
              <th onClick={() => tableHeaderClick(column)} className={column === 'id' ||
                column === 'complexity' ? 'clickable' : ''}>
                {column}
              </th>
            )}
          </tr>}
        </thead>
        <tbody>
          {Object.values(storyList()).map(story =>
            <tr>
              <StoryListItem isAdmin={currentUser.role === 'Admin'} story={story} />
            </tr>)
          }
        </tbody>

      </table>
    </>
  } catch (error) {
    return null
  }
}

export default StoryList