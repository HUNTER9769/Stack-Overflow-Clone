import React from 'react'

const WidgetTags = () => {
    
    const tags = ['c', 'css', 'express', 'firebase', 'html', 'reactjs', 'python','php', 'node.js', 'next.js', 'mysql', 'mongodb', 'mern', 'javascript', 'java'];

    return (
    <div className='widget-tags'>
        <h4>Watched Tags</h4>
        <div className='widget-tags-div'>
            {
                tags.map((tag) => (
                    <p key={tag}>{tag}</p>
                ))  
            }
        </div>

    </div>
  )
}

export default WidgetTags