import Image from "next/image"
import { AiFillPlayCircle } from "react-icons/ai"
import { BiBookmark } from "react-icons/bi"
import { FiMoreHorizontal } from "react-icons/fi"
import { HiOutlineLink } from "react-icons/hi"
import { IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io"
import Brian from "../static/ilham.jpg"
import Banner from "./../static/banner.png"

const styles = {
    wrapper: `flex items-center justify-center flex-[3] border-l border-r`,
    content: `h-screen w-full p-[2rem]`,
    postHeaderContainer: `flex justify-between items-center mt-[2.2rem] mb-[1.2rem]`,
    authorContainer: `flex gap-[1rem]`,
    authorProfileImageContainer: `h-[3rem] w-[3rem] grid center rounded-full overflow-hidden`,
    column: `flex flex-1 flex-col justify-center`,
    postDetails: `flex gap-[.2rem] text-[#787878]`,
    listenButton: `flex items-center gap-[.2rem] text-[#1A8917]`,
    socials: `flex gap-[1rem] text-[#787878] cursor-pointer`,
    space: `w-[.5rem]`,
    bannerContainer: `w-full grid center overflow-hidden mb-[2rem]`,
    articleMainContainer: `flex flex-col gap-[1rem]`,
    title: `font-bold text-3xl`,
    subTitle: `font-mediumSerifItalic text-[1.4rem] text-[#292929]`,
    articleText: `font-mediumSerif text-[1.4rem] text-[#292929]`
}

const ArticleMain = ({post, author}) => {
    // console.log(post, author, "test")
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.postHeaderContainer}>
                    <div className={styles.authorContainer} >
                        <div className={styles.authorProfileImageContainer}>
                            <Image
                            className="object-cover"
                                src={`https://res.cloudinary.com/demo/image/fetch/${author?.data?.imageUrl}`}
                                alt=""
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className={styles.column}>
                            <div>{author?.data?.name}</div>
                            <div className={styles.postDetails}><span>{new Date(post.data?.postedOn).toLocaleString('en-US',{
                                day: 'numeric',
                                month: 'short',
                                })} · {post.data?.postLength} min Read · </span> <span className={styles.listenButton}><AiFillPlayCircle/>Listen</span></div>
                        </div>
                    </div>
                    <div className={styles.socials}>
                        <IoLogoTwitter/>
                        <IoLogoFacebook/>
                        <IoLogoLinkedin/>
                        <HiOutlineLink/>
                        <div className={styles.space}/>
                        <BiBookmark/>
                        <FiMoreHorizontal/>
                    </div>
                </div>
                <div className={styles.articleMainContainer}>
                    <div className={styles.bannerContainer}>
                        <Image
                            className="object-cover"
                            src={`https://res.cloudinary.com/demo/image/fetch/${post.data?.bannerImage}`}
                            height="50%"
                            width="100%"
                            layout= "responsive"
                            alt=''
                        />
                    </div>
                    <h1 className={styles.title}>
                    {post.data?.title}
                    </h1>
                    <h4 className={styles.subTitle}>
                        <div>
                             {author?.data?.name}, {' '}
                             {new Date(post.data?.postedOn).toLocaleString('en-US',{
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric'
                                })}
                        </div>
                        <div>
                            {post.data?.brief}
                        </div>
                    </h4>
                    <div className={styles.articleText}>
                    {post?.data?.body}
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ArticleMain