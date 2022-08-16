import { authApi } from './api'

function createRelationships(global, id, setLoading, setFollow) {
  const URL = '/relationships'

  const promise = authApi(global.token).post(URL, { id })

  console.log('oi')

  promise
    .then(res => {
      console.log(res)

      setLoading(false)

      setFollow(true)
    })
    .catch(err => {
      alert('não foi possivel')

      setLoading(false)
    })
}

export default createRelationships
