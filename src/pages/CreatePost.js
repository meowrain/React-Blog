import React, { useEffect, useState } from "react";
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
function CreatePost({ isAuth }) {
    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");
    let navigate = useNavigate();
    const postsCollectionRef = collection(db, "posts");
    const createPost = async () => {
        await addDoc(postsCollectionRef, {
            title,
            postText,
            author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
        });
        navigate("/");
    };

    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        }
    }, []);

    return (
        <div className="createPostPage">
            {" "}
            <div className="cpContainer">
                <h1>创建文章</h1>
                <div className="inputGp">
                    <label> 标题:</label>
                    <input placeholder="Title..." onChange={(e) => {
                        setTitle(e.target.value);
                    }} />
                </div>
                <div className="inputGp">
                    <label> 文章:</label>
                    <textarea placeholder="Post..." onChange={(e) => {
                        setPostText(e.target.value);
                    }} />
                </div>
                <button onClick={createPost}>提交</button>
            </div>
        </div>
    )
}
export default CreatePost;