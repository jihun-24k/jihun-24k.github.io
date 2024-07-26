import { HeadFC, HeadProps, PageProps, graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import PostHead from '../components/post/PostHead'
import PostBody from '../components/post/PostBody'
import SEO from '../components/common/Seo'

export default function Post({
  data: { contentfulPost },
}: PageProps<Queries.PostPageQuery>) {
  return (
    <>
      <PostHead
        title={contentfulPost?.title as string}
        category={contentfulPost?.category as string[]}
        date={contentfulPost?.date as string}
        thumbnail={
          contentfulPost?.thumbnail?.gatsbyImageData as IGatsbyImageData
        }
      />
      <PostBody
        content={contentfulPost?.content as Queries.ContentfulPostContent}
      />
    </>
  )
}

export const Head: HeadFC<Queries.PostPageQuery> = ({
  data: { contentfulPost },
}: HeadProps<Queries.PostPageQuery>) => {
  return (
    <SEO
      title={contentfulPost?.title as string}
      description={contentfulPost?.description?.description as string}
      pathname={`/${contentfulPost?.slug}`}
      image={contentfulPost?.thumbnail?.url as string}
    />
  )
}
export const query = graphql`
  query PostPage($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      category
      date
      slug
      thumbnail {
        url
        gatsbyImageData(width: 1000)
      }
      description {
        description
      }
      content {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            description
            gatsbyImageData
            __typename
          }
        }
      }
    }
  }
`