import React from 'react'
import Navbar from '../screen/Navbar'
import DisplaySera from '../screen/DisplaySera'

function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="row">
          <div className="col-sm-6">
            <DisplaySera />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
