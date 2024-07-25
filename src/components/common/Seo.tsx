import { graphql, useStaticQuery } from 'gatsby'
import { ReactNode } from 'react'

type SEOProps = {
  title?: string
  description?: string
  pathname?: string
  image?: string
  children?: ReactNode
}

const METADATA_QUERY = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    file(name: { eq: "thumbnail" }) {
      publicURL
    }
  }
`

export default function SEO({
  title,
  description,
  pathname,
  image,
  children,
}: SEOProps) {
  const {
    site: { siteMetadata },
    file: { publicURL: defaultImage },
  } = useStaticQuery(METADATA_QUERY)

  const metadata = {
    title: title ?? siteMetadata.title,
    description: description ?? siteMetadata.description,
    siteUrl: `${siteMetadata.siteUrl}${pathname ?? ''}`,
    image: image ?? defaultImage,
  }

  return (
    <>
      <title>{metadata.title}</title>

      <html lang="ko" />
      <meta name="description" content={metadata.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:image" content={metadata.image} />
      <meta property="og:url" content={metadata.siteUrl} />
      <meta property="og:site_name" content={metadata.title} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image" content={metadata.image} />
      <meta name="twitter:site" content="@사용자이름" />
      <meta name="twitter:creator" content="@사용자이름" />

      {children}
    </>
  )
}