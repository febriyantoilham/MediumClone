import { useState, useContext} from 'react';
import { MediumContext } from "../context/MediumContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase";

const styles = {
}

const PostModal = () => {
    const {currentUser} = useContext(MediumContext)
    const [title, setTitle] = useState('')
    const [brief, setBrief] = useState('')
    const [category, setCategory] = useState('')
    const [postLength, setPostLength] = useState('')
    const [bannerImage, setBannerImage] = useState('')
    const [body, setBody] = useState('')

    const addPostToFirebase = async event => {
        event.preventDefault()
        await addDoc(collection(db, 'article'), {
            bannerImage: bannerImage,
            body: body,
            category: category,
            brief: brief,
            postedOn: serverTimestamp(),
            postLength: Number(postLength),
            title: title,
            author: currentUser.email
        })
    }

    return (
        /* wrapper */
        <div className="w-[70rem] h-[50rem] flex flex-col justify-start items-center gap-[1rem] p-[1rem] font-mediumSerif overflow-scroll">
        {/* title */}
            <div className="my-[2rem] font-bold text-3xl">Create a New Post</div>
        {/* smallField */}
            <div className="w-full flex justify-between gap-[1rem]">
                {/* fieldTitle */}
                <span className="flex-1 text-end">Title</span>
                {/* inputContainer */}
                <span className="flex-[5] h-min border-2 border-[#787878]">
                    {/* inputField */}
                    <input 
                    className="w-full border-0 outline-none bg-transparent"
                    type="text"
                    value={title}
                    onChange={event =>setTitle(event.target.value)}
                    />
                </span>
            </div>
        {/* smallField */}
            <div className="w-full flex justify-between gap-[1rem]">
                {/* fieldTitle */}
                <span className="flex-1 text-end">Brief</span>
                {/* inputContainer */}
                <span className="flex-[5] h-min border-2 border-[#787878]">
                    {/* inputField */}
                    <input 
                    className="w-full border-0 outline-none bg-transparent"
                    type="text"
                    value={brief}
                    onChange={event =>setBrief(event.target.value)}
                    />
                </span>
            </div>
        {/* smallField */}
            <div className="w-full flex justify-between gap-[1rem]">
                {/* fieldTitle */}
                <span className="flex-1 text-end">Banner Image URL</span>
                {/* inputContainer */}
                <span className="flex-[5] h-min border-2 border-[#787878]">
                    {/* inputField */}
                    <input 
                    className="w-full border-0 outline-none bg-transparent"
                    type="text"
                    value={bannerImage}
                    onChange={event =>setBannerImage(event.target.value)}
                    />
                </span>
            </div>
        {/* smallField */}
            <div className="w-full flex justify-between gap-[1rem]">
                {/* fieldTitle */}
                <span className="flex-1 text-end">Category</span>
                {/* inputContainer */}
                <span className="flex-[5] h-min border-2 border-[#787878]">
                    {/* inputField */}
                    <input 
                    className="w-full border-0 outline-none bg-transparent"
                    type="text"
                    value={category}
                    onChange={event =>setCategory(event.target.value)}
                    />
                </span>
            </div>
        {/* smallField */}
            <div className="w-full flex justify-between gap-[1rem]">
                {/* fieldTitle */}
                <span className="flex-1 text-end">Estimated Read Length (in minutes)</span>
                {/* inputContainer */}
                <span className="flex-[5] h-min border-2 border-[#787878]">
                    {/* inputField */}
                    <input 
                    className="w-full border-0 outline-none bg-transparent"
                    type="text"
                    value={postLength}
                    onChange={event =>setPostLength(event.target.value)}
                    />
                </span>
            </div>
        {/* smallField */}
        <div className="w-full flex justify-between gap-[1rem]">
                {/* fieldTitle */}
                <span className="flex-1 text-end">Article Text</span>
                {/* inputContainer */}
                <span className="flex-[5] h-min border-2 border-[#787878]">
                    {/* inputField */}
                    <textarea 
                    className="w-full border-0 outline-none bg-transparent"
                    type="text"
                    rows={12}
                    value={body}
                    onChange={event =>setBody(event.target.value)}
                    />
                </span>
            </div>
            <button onClick={addPostToFirebase} className="bg-black text-white py-2 px-4 rounded-full">Submit</button>
        </div>
        
    )
}

export default PostModal