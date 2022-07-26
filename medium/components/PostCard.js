import Image from 'next/image'
import Logo from '../static/logo.png'
import {FiBookmark} from "react-icons/fi"
import Link from "next/link";
import { db } from "../firebase";
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';


const styles = {
  wrapper: `flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer`,
  authorContainer: `flex gap-[.4rem]`,
  authorImageContainer: `grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
  authorImage:`object-cover`,
  authorName:`font-semibold`,
  title: `font-bold text-2xl`,
  briefing: `text-[#787878] line-clamp-2`,
  detailsContainer: `flex items-center justify-between text-[#787878]`,
  articleDetails: `my-2 text-[.8rem]`,
  category: `bg-[#F2F2F2] p-1 rounded-full`,
  bookmarkContainer: `cursor-pointer`,
  postDetails: `flex-[2.5] flex flex-col overflow-hidden`,
}
const PostCard = ({post}) => {
  const [authorData, setAuthorData] = useState(null)

  // Get User Data By Email in article
  useEffect(()=>{
    const getAuthorData = async () => {
      console.log((await getDoc(doc(db, 'users', post.data.author))).data(), 'test author')
      setAuthorData(
        (await getDoc(doc(db, 'users', post.data.author))).data()
        )
      }
    getAuthorData()
  }, [post])
  return (
    <Link href={`/post/${post.id}`}>
      <div className={styles.wrapper}>
        <div className={styles.postDetails}>
          <div className={styles.authorContainer}>
            <div className={styles.authorImageContainer}>
              <Image
                src={`https://res.cloudinary.com/demo/image/fetch/${authorData?.imageUrl}`}
                className={styles.authorImage}
                width={40}
                height={40}
                alt={"img"}
                />
            </div>
            <div className={styles.authorName}>{authorData?.name}</div>
          </div>
          <h1 className='font-bold text-2xl line-clamp-2'>{post.data.title}</h1>
            <div className={styles.briefing}>
              {post.data.brief=="" ? post.data.body : post.data.brief}
            </div>
          <div className={styles.detailsContainer}>
            <span className={styles.articleDetails}>
              {new Date(post.data.postedOn).toLocaleString('en-US', {
                day: 'numeric',
                month: 'short',
              })} · {post.data.postLength} min read · <span className={styles.category}>{post.data.category}</span></span>
            <span className={styles.bookmarkContainer}>
              <FiBookmark className="h5 w-5"/>
            </span>
          </div>
        </div>
        {/* thumbnails Container */}
        <div className="flex-1">
          <Image
            height= {100}  
            width= {100}
            src={`https://res.cloudinary.com/demo/image/fetch/${post.data.bannerImage}`}
            alt={"img"}
          />
        </div>
      </div>
    </Link>
  )
}

export default PostCard