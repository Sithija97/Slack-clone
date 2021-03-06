import React, { useState, useEffect } from "react";
import FlipMove from 'react-flip-move'; 
import Post from '../Post/Post'
import TweetBox from '../TweetBox/TweetBox'
import './Feed.css'
import db from "./firebase";
function Feed() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc=>doc.data()))
        })
    }, [])
    return (
        <div className="feed">
            {/* Heder */}
            <div className="feed_header">
                <h2>Home</h2>
            </div>
            {/* Tweet box */}
            <TweetBox/>
            {/* Tweets */}
            <FlipMove>
            {posts.map(post =>(
                <Post
                key={post.text}
                displayName={post.displayName}
                username={post.username}
                verified={post.verified}
                text={post.text}
                avatar={post.avatar}
                image={post.image}
              />
            ))}
            </FlipMove>
            
        </div>
    )
}

export default Feed
