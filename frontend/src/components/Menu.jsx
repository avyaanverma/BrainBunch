import React from 'react'
import Card from './ui/Card'

function Menu() {
  return (
    <div>
      {/* for using h-full parent element's height should be set */}
      <div className="cardBg h-[70vh] flex">
        <Card color="green" imageType="planning" title="Interview"/>
        <Card color="yellow" imageType="studying"title="Planning"/>
        <Card color="green" imageType="research" title="Semester"/>
        <Card color="yellow" imageType="planning" title="General Knowledge"/>
        
      </div>
    </div>
  )
}

export default Menu