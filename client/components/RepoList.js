import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropagateLoader from 'react-spinners/PropagateLoader'

import Head from './head'

const RepoList = (props) => {
  const [search, setSearch] = useState('')
  const handelChange = (e) => {
    setSearch(e.target.value)
  }
  const filterList = props.usersRepositories.filter((el) => el.name.includes(search))
  return (
    <div>
      <Head title="Repositories" />
      <img
        className="mx-auto h-12 w-auto"
        src="https://image.flaticon.com/icons/svg/25/25231.svg"
        alt="Workflow"
      />
      <div className="max-w-xl pt-16 mx-auto mb-10 border-b border-b-2 border-black py-2">
        <input
          value={search}
          onChange={handelChange}
          type="text"
          placeholder="Search..."
          className="appearance-none bg-transparent  opacity-50 text-gray-700 bg-grey-50 w-full text-black mr-6 ry-1"
        />
      </div>
      <table className="min-w-full pt-3 black bg-gray-50 my-8 mx-auto border-gray-200 px-8 border-4 ">
        <thead>
          <tr>
            <th className="px-6 py-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
              Deployment
            </th>
            <th className="px-6 py-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
              Last Commit
            </th>
            <th className="px-6 py-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
              Readme
            </th>
          </tr>
        </thead>
        <tbody>
          {filterList.map((el) => (
            <tr className="bg-gray-100">
              <td className="px-6 py-3 whitespace-no-wrap border-b border-gray-200">{el.name}</td>
              <td className="px-6 py-3 whitespace-no-wrap border-b border-gray-200">
                <a
                  className={`${el.homepage ? 'text-gray-500' : 'text-gray-900'} font-semibold`}
                  href={el.homepage ? el.homepage : undefined}
                >
                  Go
                </a>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <Link to={`/${props.usersName}/${el.name}`}>View Readme</Link>
              </td>
              <td className="px-6 py-3 whitespace-no-wrap border-b border-gray-200">
                {new Date(el.updated_at).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {!props.usersRepositories.length && (
        <div className="flex justify-center items-center mt-40">
          <PropagateLoader color="#2b303b" />
        </div>
      )}
    </div>
  )
}

RepoList.propTypes = {}

export default RepoList
