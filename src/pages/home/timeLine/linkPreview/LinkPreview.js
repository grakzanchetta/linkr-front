import { useEffect, useState } from 'react'
import getLinkPreview from '../../../../services/getLinkPreview'
import reactLogo from '../../../../assets/images/image 4.svg'
import { LinkContainer, Box } from './styles'

const getUrl = text => {
  if (!text) return null

  const a = document.createElement('a')
  a.href = text

  const { protocol, host, pathname, search, hash } = a

  const url = `${protocol}//${host}${pathname}${search}${hash}`

  const isSameHost = host === window.location.host

  if (isSameHost) return null

  return url
}

export default function LinkPreview({ link }) {
  const [previewData, setPreviewData] = useState(0)

  console.log(previewData)

  useEffect(() => {
    const url = getUrl(link)
    if (!url) return null
    getLinkPreview(url, setPreviewData)
  }, [])

  return previewData === null ? null : (
    <LinkContainer>
      <Box>
        <h6>Como aplicar o Material UI em um projeto React</h6>
        <h5>
          Hey! I have moved this tutorial to my personal blog. Same content, new
          location. Sorry about making you click through to another page.
        </h5>
        <h3>https://medium.com/@pshrmn/a-simple-react-router</h3>
      </Box>
      <img src={reactLogo} alt="logo" />
    </LinkContainer>
  )
}
