import Image from "next/image"
import { AiOutlineSearch } from "react-icons//ai";
import { MdMarkEmailUnread } from "react-icons//md";
import ReplitLogo from '../static/replit.png'
import TutorialImg from '../static/tutorial.jpg'
import CPLogo from '../static/cp.png'
import Brian from '../static/ilham.jpg'
import JSLogo from '../static/jsLogo.png'

const styles = {
    wrapper: `h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem]`,
    accentedButton: 'flex items-center justify-center text-sm bg-black text-white my-[2rem] py-[.6rem] rounded-full',
    searchBar: `flex items-center gap.[.6rem] h-[2.6rem] border px-[1rem] rounded-full`,
    searchInput: `border-none outline-none bg-none w-full`,
    authorContainer: `my-[2rem]`,
    authorProfileImageContainer: `h-[5rem] w-[5rem] rounded-full overflow-hidden`,
    authorProfileImage: `object-cover`,
    authorName: `font-semibold mb-[.2rem] mt-[1rem]`,
    authorFollowing: `text-[#787878]`,
    authorAction: `flex gap-[.6rem] my-[1rem]`,
    actionButton: `bg-[#1A8917] text-white rounded-full px-[.6rem] py-[.4rem] text-sm`,
    recommendationAuthorProfileContainer: `rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
    recommendationAuthorProfile: `object-cover`,
    recommendationAuthorName: `text-sm`,
    recommendationAuthorContainer: `flex items-center gap-[.6rem]`,
    recommendationTitle: `font-bold`,
    recommendationThumbnailContainer: `flex flex-1 items-center justify-center h-[4rem] w-[4rem]`,
    recommendationThumnail: `object-cover`,
    articleContentWrapper: `flex items-center justify-between cursor-pointer my-[1rem]`,
    articleContent: `flex-[4]`,
}

const Recommendations = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.accentedButton}>
                Get Unlimited Access
            </div>
            <div className={styles.searchBar}>
                <AiOutlineSearch/>
                <input 
                className={styles.searchInput}
                placeholder='Search'
                type='text'
                />
            </div>
            <div className={styles.authorContainer}>
                <div className={styles.authorProfileImageContainer}>
                    <Image
                        className={styles.authorProfileImage}
                        src={Brian}
                        alt=""
                        width={100}
                        height={100}
                    />
                </div>
                <div className={styles.authorName}>Mo Brian</div>
                <div className={styles.authorFollowing}>1K Follower</div>
                <div className={styles.authorAction}>
                    <button className={styles.actionButton}>Follow</button>
                    <button className={styles.actionButton}>
                        <MdMarkEmailUnread/>
                    </button>
                </div>
            </div>
            
            <div className={styles.recommendationContainer}>
                <div className={styles.title}>More From Medium</div>
                <div className={styles.articlesContainer}>
                    {recommendedPosts.map(post => (
                    // eslint-disable-next-line react/jsx-key
                    <div className={styles.articleContentWrapper}>
                        <div className={styles.articleContent}>
                            <div className={styles.recommendationAuthorContainer}>
                                <div className={styles.recommendationAuthorProfileContainer}>
                                    <Image
                                        className={styles.recommendationAuthorProfile}
                                        src={post.author.image}
                                        alt=""
                                        height={100}
                                        width={100}
                                    />
                                </div>
                                <div className={styles.recommendationAuthorName}>
                                    {post.author.name}
                                </div>
                            </div>
                            <div className={styles.recommendationTitle}>
                                {post.title}
                            </div>
                        </div>
                        <div className={styles.recommendationThumbnailContainer}>
                            <Image
                                className={styles.recommendationThumnail}
                                src={post.image}
                                alt=""
                                height={100}
                                width={100}
                            />
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Recommendations

const recommendedPosts = [
    {
        title: 'It Starts & Ends with Stephen Curry',
        image: ReplitLogo,
        author: {
            name: 'Christian Oblena',
            image: CPLogo
        }
    },
    {
        title: '“Our Wounds and Skin beneath that Mask”​',
        image: ReplitLogo,
        author: {
            name: 'Simran Kaur',
            image: CPLogo
        }
    },
    {
        title: 'Jewels, Gems & Gunpowder',
        image: ReplitLogo,
        author: {
            name: 'Jodie Tedder',
            image: CPLogo
        }
    },
]