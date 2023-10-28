import React, { useState } from 'react'
import './style.css'
export const Content = () => {
    const[course,setCourse]=useState([{topic:'Introductory Session (Live class) ', time:'2hr 3min •'},
                                    {topic:'Getting into the Fundamentals  ', time:'2hr 3min •'},
                                    {topic:'Know your niche', time:'2hr 3min •'},
                                    {topic:'The Crux of Search Engine Optimization (SEO) What is SEO?  ', time:'2hr 3min • '},
                                    {topic:'The Key to Keywords  ', time:'2hr 3min • '},
                                    {topic:'Content Marketing - Ensuring the Reach ', time:'2hr 3min • '}])
  return (
    <div className='main'>
        <h2>Content</h2>
        <span className='timing'>12 lessons • 2hr 3 min •</span>
        <ul>
            {
                course.map((ele,key)=>(

                    <li>
                        <div className='list-data'>{ele.topic}</div>
                        <div className='list-duration'>{ele.time}</div>
                    </li>      
                ))
            }
        </ul>
            <a href='#' className='viewAllBtn'>View All</a>
    </div>
  )
}

