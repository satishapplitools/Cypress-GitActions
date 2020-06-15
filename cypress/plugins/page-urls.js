'use strict'
const axios = require('axios')
const jp = require('jsonpath')

async function getPages (contentUrl) {
  const api = axios.create({ headers: { 'User-Agent': 'content-tester' } })
  const response = await api.get(process.env.CONTENT_URL)
  // Filter content urls from response
  const urls = jp.query(response.data, '$..url')
  return urls.filter(link => {
    return link.match(new RegExp('/content.*html$', 'g'))
  })
}

module.exports = {
  getPages: async () => {
    const pages = await getPages()
    return pages
  }
}
