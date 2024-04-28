import Navbar from '../components/navbar/page';
import React from 'react';
import CardList from './cardList';
import ViewUserButton from '../components/posts/viewUserButton';

const Posts = async() => {
    interface Iposts {
        userId:number, 
        id:number,
        title:string,
        body:string,
    }
    const base_url = "https://jsonplaceholder.typicode.com/posts"

    const response = await fetch(base_url, {
        cache:"no-store"
    })
    const posts:Iposts[] = await response.json()
    return (
       <div>
            <Navbar/>
            <div className="text-pink-500 text-lg font-weight-700 p-2 text-center">POST PAGE</div> 
            <p className='text-center'>Time Now {new Date().toLocaleTimeString()}</p>

            {posts.map((post) => {
                return(       
                    <CardList key={post.id}>
                        <p className="font-bold text-sm mb-2">Post ID:{post.id} </p>
                        <p className="text-gray-700 text-base mt-4">Post Title:{post.title}</p>
                        <p className="text-gray-700 text-base mt-4">Post Description: {post.body}</p>
                        <ViewUserButton userId={post.userId}/>
                    </CardList>
                )
            })}
           
       </div>
    )
}

export default Posts;
