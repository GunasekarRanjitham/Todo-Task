import React, { useState } from 'react'
import Header from './components/Header'


function App() {

  let [data, setData] = useState([
    {
      id: 1,
      title: " Office Task 1",
      description: "This is the description of my first task",
      status: "Not Completed"
    },
    {
      id: 2,
      title: "Office Task 2",
      description: "This is the description of my second task",
      status: "Completed"
    },
    {
      id: 3,
      title: "Office Task 3",
      description: "This is the description of my third task",
      status: "Not Completed"
    },
  ])
  return (
    <div>
      <Header data={data} setData={setData} />
    </div>
  )
}

export default App