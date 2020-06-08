import React from 'react'
import ReactMarkdown from 'react-markdown'
import './RepoView.scss'
import PropagateLoader from 'react-spinners/PropagateLoader'

import Head from './head'

const RepoView = (props) => {
  return (
    <div>
      <Head title="README" />
      <img
        className="mx-auto h-12 w-auto"
        src="https://image.flaticon.com/icons/svg/25/25231.svg"
        alt="Workflow"
      />
      <article className="markdown-body pt-3 black bg-gray-50 my-8 mx-auto  px-8  ">
        <ReactMarkdown source={props.readme} />
        {!props.readme.length && (
          <div className="flex justify-center items-center mt-40">
            <PropagateLoader color="#2b303b" />
          </div>
        )}
      </article>
    </div>
  )
}

RepoView.propTypes = {}

export default RepoView
