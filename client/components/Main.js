import React, { useState } from 'react'
import { history } from '../redux'

import Head from './head'

const Main = () => {
  const [userVal, setUserVal] = useState('')
  const onInputChange = (e) => {
    setUserVal(e.target.value)
  }
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      history.push(`/${userVal}`)
    }
  }
  return (
    <div className="flex mainS items-center justify-center bg-gray-700 h-screen">
      <Head title="Repositories" />
      <div className="bgCol text-black font-bold rounded-lg border shadow-lg p-10">
        <img
          className="mx-auto h-12 w-auto"
          src="https://image.flaticon.com/icons/svg/25/25231.svg"
          alt="Workflow"
        />
        <input
          className="bg-gray-300appearance-none mr-2 border-4 border-black rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
          type="text"
          value={userVal}
          onChange={onInputChange}
          onKeyDown={handleKeyPress}
          placeholder="Username"
        />
        <button
          className=" bg-gray-300appearance-none mr-2 mt-5 border-4 border-black rounded py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
          type="button"
          onClick={() => history.push(`/${userVal}`)}
        >
          Search
        </button>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
