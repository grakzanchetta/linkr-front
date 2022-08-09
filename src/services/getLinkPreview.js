import axios from 'axios'
import cheerio from 'cheerio'

const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'

const getPreviewData = tags => {
  const result = tags.reduce((previewData, item) => {
    switch (item.tag) {
      case 'og:title':
        previewData.title = item.value
        break
      case 'og:url':
        previewData.link = item.value
        break
      case 'og:description':
        previewData.description = item.value
        break
      case 'og:site_name':
        previewData.site = item.value
        break
      case 'og:image':
        previewData.image = item.value
        break
      default:
        break
    }
    return previewData
  }, {})

  return Promise.resolve(result)
}

const parseHTML = html => {
  const $ = cheerio.load(html)

  const meta = []
  $('head meta').map((i, item) => {
    if (!item.attribs) return null

    const property = item.attribs.property || null
    const content = item.attribs.content || null

    if (!property || !content) return null
    meta.push({ tag: property, value: content })
    return null
  })

  return Promise.resolve(meta)
}

const fetchUrl = url => {
  return axios(CORS_PROXY + url).then(response => response.data)
}

export default function getLinkPreview(url, setPreviewData) {
  fetchUrl(url).then(parseHTML).then(getPreviewData).then(setPreviewData)
}
