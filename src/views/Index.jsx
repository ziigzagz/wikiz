import React from 'react'
import Navbar from '../components/_navbar'
import Header from '../components/_header'
import Profile from '../components/_profile'
import Education from '../components/_education'
import MyWork from '../components/_mywork'
import Skill from '../components/_skill'
import Certificate from '../components/_certificate'
import Contact from '../components/_contact'
function Index() {
  return (
    <>
      {<Navbar />}
      {<Header />}
      {<Profile />}
      {<Education />}
      {<Profile />}
      {<MyWork />}
      {<Skill />}
      {<Certificate />}
      {<Contact />}
     </>
  )
}

export default Index
