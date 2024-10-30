import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
} from 'gatsby-source-contentful/rich-text'
import { Options } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'


const options: Options = {
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => <span>{children}</span>,
    [BLOCKS.HEADING_2]: (node, children) => <span>{children}</span>,
    [BLOCKS.HEADING_3]: (node, children) => <span>{children}</span>,
    [BLOCKS.HEADING_4]: (node, children) => <span>{children}</span>,
    [BLOCKS.HEADING_5]: (node, children) => <span>{children}</span>,
    [BLOCKS.HEADING_6]: (node, children) => <span>{children}</span>,
  },
  renderMark: {
    [MARKS.BOLD]: (text) => <span>{text}</span>,
  }
}

export default function useRenderPreview({
  raw,
  references,
}: Queries.ContentfulPostContent) {
  if (!raw) return null

  return renderRichText(
    {
      raw,
      references: references as unknown as ContentfulRichTextGatsbyReference[],
    },
    options,
  )
}