import React from 'react'
import Layout from '../components/Layout'
import SideBar from '../components/SideBar'
import HomeFeed from '../components/HomeFeed'
import ExploreBar from '../components/ExploreBar'


const Home = () => {
  return <Layout title="/home">
    <div className="h-screen flex flex-row">
       
        <SideBar />
        {/* Homefeed Section  */}
        <div className="flex-1">
          <HomeFeed />
        </div>
        {/* Right Explore bar */}
        <ExploreBar />
      </div>
  </Layout>
 
}

export default Home
