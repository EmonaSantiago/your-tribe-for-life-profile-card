
import * as prismic from '@prismicio/client'

// Update your repository name here
const repositoryName = 'my-profile-card'

const createClient = (params) => {
  const client = prismic.createClient(repositoryName, params)
  return client
}

export default createClient 