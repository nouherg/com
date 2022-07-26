import React from 'react'
import ProfilePhoto from './ProfilePhoto'

function FullName() {
  return (
    <div id='one'>
    <div id='parent'>
   <h1>
      Hi,<br/>
      I'm 
      <span className="name"> Reguigui Nouhe
      </span>
      <br />
      I'm a <span className="name">Web Developer</span>, <br/>
      I'm <span className='name'> 22 years old</span>, <br/>
     <span className='name'> five-year experience </span> <br/>
     <a href='https://www.bing.com/search?q=google&form=ANNTH1&refig=042a3823e3104dfd93b4ce62214263e0' id='more'>for more details about me </a> 
</h1>
   <ProfilePhoto/>
    </div>
    </div>
  )
}

export default FullName