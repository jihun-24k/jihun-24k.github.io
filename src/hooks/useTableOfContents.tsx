import { useState, useMemo, useEffect } from 'react'
import { HEADERS } from './useRenderRichText'

type ContentType = {
  content: {
    content: {
      data: unknown
      marks: unknown
      nodeType: string
      value: string
    }[]
    nodeType: string
  }[]
  nodeType: string
}

export default function useTableOfContents(rawContent: string) {
  const [activeId, setActiveId] = useState<string | null>(null)

  const toc = useMemo(() => {
    const { content } = JSON.parse(rawContent) as ContentType
    const headers = content.filter(item =>
      HEADERS.find(header => header === item.nodeType),
    )
    const minDepth = Math.min(
      ...headers.map(({ nodeType }) =>
        parseInt(nodeType.charAt(nodeType.length - 1)),
      ),
    )

    return headers.map(({ nodeType, content }) => {
      const title = content[0].value
      const id = `${title.replaceAll(' ', '-')}_`
      const depth = parseInt(nodeType.charAt(nodeType.length - 1)) - minDepth

      return { id, title, depth }
    })
  }, [rawContent])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries =>
        setActiveId(prevId => {
          // 스크롤을 아래로 내리는 경우
          if (entries[0].boundingClientRect.top < 0) return entries[0].target.id
          // 스크롤을 위로 올리는 경우
          else {
            const index = toc.findIndex(({ id }) => id === prevId)
            return index > 0 ? toc[index - 1].id : null
          }
        }),
      { rootMargin: '0% 0px -100% 0px' },
    )

    document
      .querySelectorAll('#content > h1, h2, h3')
      .forEach(element => observer.observe(element))

    return () => observer.disconnect()
  }, [toc])

  return { toc, activeId }
}