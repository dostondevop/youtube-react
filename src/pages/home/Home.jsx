import React from 'react'
import './Home.css'
import Sidebar from '../../components/sidebar/Sidebar.jsx'
import Feed from '../../components/feed/Feed.jsx'

const Home = ({sidebar}) => {
  return (
    <>
        <Sidebar sidebar = {sidebar}/>
        <div className={`container ${sidebar ? "" : 'large-conatiner'}`}>
            <Feed/>
        </div>
    </>
  )
}

export default Home