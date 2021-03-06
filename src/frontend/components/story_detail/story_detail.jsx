import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import './story_detail.scss'

const StoryDetail = ({ story, fetchStory, editStory }, props) => {
  useEffect(() => {
    fetchStory(id)
  }, [])

  const { id } = useParams()
  const history = useHistory()

  const handleSubmit = (e) => {
    editStory(id, e.target.value).then(() => history.push('/'))
  }

  try {
    return <div className='story-detail'>
      <h2>Admin Story View Page</h2>
      <div className='story-detail__contents'>
        <section className='story-detail__text'>
          <p>{story.summary}</p>
          <p>{story.description}</p>
        </section>
        <table>
          <tr><th>ID:</th><td>{story.id}</td></tr>
          <tr><th>Complexity:</th><td>{story.type}</td></tr>
          <tr><th>Cost:</th><td>{story.cost}</td></tr>
          <tr><th>Est Hours:</th><td>{story.estimatedHrs}</td></tr>
        </table>
      </div>
      <div className='story-detail__btn-container'>
        <button className='red-btn' value='rejected'
          onClick={e => handleSubmit(e)}>Reject</button>
        <button className='green-btn' value='accepted'
          onClick={e => handleSubmit(e)}>Accept</button>
      </div>
    </div >
  } catch (error) {
    return null
  }
}

export default StoryDetail