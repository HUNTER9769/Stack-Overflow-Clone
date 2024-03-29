import React from 'react'

import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
import './Tags.css'

const Tags = () => {

  const tagsList = [{
    id: 0,
    tagName: "javascript",
    tagDesc: "beautiful web language"
  }, {
    id: 1,
    tagName: "python",
    tagDesc: "cool data science language"
  }, {
    id: 2,
    tagName: "java",
    tagDesc: "amazing backend language"
  }]

  return (
    <div className='home-container-1'>
        <LeftSidebar/>
        <div className="home-container-2">
          <h1 className='tags-h1 dark-theme'>Tags</h1>
          <p className='tags-p dark-theme'>A tag is a keyword or label that categorizes your questions with other, similar questions.</p>
          <p className='tags-p dark-theme'>Using the right tags makes it easier  for others to find and answer your questions.</p>
          <div className="tags-list-container ">
            {
              tagsList.map((tag) => (
                <TagsList tag={tag} key={tagsList.id}/>
              ))
            }
          </div>        
        </div>
        
    </div>
  )
}

export default Tags