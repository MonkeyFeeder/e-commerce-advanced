import React from 'react';

import './menu-item.styles.scss';

// Dynamic classes, style in JSX, JS methods in JSX

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <div 
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }} />
        <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">Shop now</span>
      </div>
    </div>
  )
}

export default MenuItem;