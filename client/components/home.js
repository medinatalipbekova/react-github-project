import React, { useEffect, useState } from 'react'
import { Route, useParams } from 'react-router-dom'
import axios from 'axios'
import Header from './header'
import Head from './head'
import Footer from './Footer'
import RepoList from './RepoList'
import RepoView from './RepoView'

const Home = () => {
  const [usersRepositories, setUsersRepositories] = useState([])
  const [readme, setReadme] = useState('')
  const [user, setUser] = useState({})
  const { usersName, repositoryName } = useParams()

  useEffect(() => {
    axios.get(`https://api.github.com/users/${usersName}/repos`).then(({ data }) => {
      setUsersRepositories(data)
    })
  }, [usersName])
  useEffect(() => {
    const headers = { Accept: 'application/vnd.github.VERSION.raw' }
    if (repositoryName !== undefined) {
      axios(`https://api.github.com/repos/${usersName}/${repositoryName}/readme`, {
        param: {},
        headers
      }).then(({ data }) => {
        setReadme(data)
      })
    }
  }, [repositoryName, usersName])
  useEffect(() => {
    axios.get(`https://api.github.com/users/${usersName}`).then(({ data }) => {
      setUser(data)
    })
  }, [usersName])

  return (
    <div>
      <Head title="Madu" />
      <Header usersName={usersName} readme={readme} user={user} />
      <div className="container page-wrap mx-auto pt-16">
        <Route
          exact
          path="/:usersName"
          component={() => (
            <RepoList usersRepositories={usersRepositories} usersName={usersName} readme={readme} />
          )}
        />
        <Route
          exact
          path="/:usersName/:repositoryName"
          component={() => <RepoView repositoryName={repositoryName} readme={readme} />}
        />
      </div>
      <Footer />
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
