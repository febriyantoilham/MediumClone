// import { async } from "@firebase/util";
import { signInWithPopup } from "firebase/auth";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db, auth, provider } from "../firebase";

const MediumContext = createContext();

const MediumProvider = ({children}) => {
    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])
    const [currentUser, setCurrentUser] = useState(null)

    /* Get Users Data */
    useEffect(() => {
        const getUsers = async () => {
            const querySnapshot = await getDocs(collection(db, 'users'))
    
            setUsers(querySnapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    data: {
                        ...doc.data()
                    }
                }
            }))
        }
    getUsers()
    }, [])

    /* Get Articles Data */
    useEffect(()=>{
        const getPosts = async ()=>{
            const querySnapshot = await getDocs(collection(db, 'article'))
            setPosts(querySnapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    data: {
                        body: doc.data().body,
                        brief: doc.data().brief,
                        category: doc.data().category,
                        postLength: doc.data().postLength,
                        bannerImage: doc.data().bannerImage,
                        bannerImage: doc.data().bannerImage,
                        title: doc.data().title,
                        postedOn: doc.data().postedOn.toDate(),
                        author: doc.data().author,
                    }
                }
            }))
        }
    getPosts()
    },[])

    const addUserToFirebase = async user => {
        await setDoc(doc(db, 'users', user.email), {
            email: user.email,
            name: user.displayName,
            imageUrl: user.photoURL,
            followerCount: 0
        })
    }

    const handleUserAuth = async () => {
        const userData = await signInWithPopup(auth, provider)
        const user = userData.user
        console.log(userData.user,'user')
        setCurrentUser(user)
        addUserToFirebase(user)
    }

    return (
        <MediumContext.Provider value={{posts, users, handleUserAuth, currentUser}}>
            {children}
        </MediumContext.Provider>
    )
}

export { MediumContext, MediumProvider};