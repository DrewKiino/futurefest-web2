

class ResourceManager {

  static get = (resource, callback) => {
    const url = 'https://us-central1-lustrous-spirit-170901.cloudfunctions.net/'+resource+'-getAll'
    fetch(url)
    .then ( results => {
      return results.json()
    })
    .then ( json => {
    	callback(json)
    })
    .catch ( error => {
      console.log(error)
    })
  }
}

export default ResourceManager
