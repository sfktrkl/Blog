import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ReactMarkdown from "react-markdown";

const BlogPost = ({post}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Reyiz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="../">Şafak TÜRKELİ</a>
        </h1>

        <div>
          <h2 className={styles.post_title}><a href={post.slug}>{post.title}</a></h2>
          <div><ReactMarkdown source={post.text}/></div>
          <div className={styles.post_date}>{post.date}</div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/sfktrkl">Created by sfktrkl</a>
      </footer>
    </div>
  )
}

BlogPost.getInitialProps = async ({ req, query }) => {
  const res = await fetch(`http://localhost:3000/api/post/${query.postId}`);
  const json = await res.json();
  return { post: json.post };
};

export default BlogPost;
