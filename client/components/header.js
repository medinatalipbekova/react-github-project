import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-black p-6">
      <div className="flex items-center">
        {props.usersName && (
          <img
            className="w-20 h-20 rounded border-white hover:border-transparent border-solid border-white"
            src={props.user.avatar_url}
            alt="Mad"
          />
        )}
        {props.usersName && (
          <span className="font-semibold mr-2 pl-10 flex-shrink-0 text-white text-5xl tracking-tight">
            {props.user.login}
          </span>
        )}
      </div>

      <img
        className="mx-auto h-12 w-auto"
        src="https://image.flaticon.com/icons/svg/25/25231.svg"
        alt="Workflow"
      />
      <div>
        {props.usersName && (
          <Link
            className="text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0"
            to="/"
          >
            Main
          </Link>
        )}{' '}
        &nbsp;
        {props.readme && (
          <Link
            className=" text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0"
            to={`/${props.usersName}`}
          >
            Repositories
          </Link>
        )}
      </div>
    </nav>
  )
}

export default React.memo(Header)
