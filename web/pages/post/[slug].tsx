import { PortableText } from "@portabletext/react"
import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"
import client from '../../sanity-client'
import { Author, Post, SanityReference } from '../../schema'


export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await client.getAll('post')
  return {
    paths: posts.map(({ slug }) => ({ params: { slug: slug?.current } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  // It's important to default the slug so that it doesn't return "undefined"
  const slug = context.params?.slug as string;


  const [post] = await client.getAll('post', `slug.current == "${slug}"`)

  const author = await client.expand(post.author as SanityReference<Author>)
  return {
    props: {
      post,
      author
    }
  }
}

interface IPostPageProps {
  post: Post
  author: Author
}
const PostPage = ({ post, author }:IPostPageProps) => {
  const router = useRouter()
  return (
    <div>
      {author.bio && (
        <PortableText
          value={author.bio}
        />
      )}
    </div>
  )
}


export default PostPage