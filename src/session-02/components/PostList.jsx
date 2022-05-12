import React, {useState} from 'react';
import Card from './Card'
import Post from "./Post";

export default function PostList(props) {
    // eslint-disable-next-line array-callback-return

    const [post, setPost] = useState()

    const getSelectedPost = post => {
        setPost(post)
    };
    const backToList = () => setPost(undefined);

    return (
        <React.Fragment>
            {post ? (<Post data={post} onClickBack={backToList}/>)
                : (props.data.map((item, index) => {
                    return <Card key={"item-" + index} id={index} data={item} onClickShowPost={getSelectedPost}/>
                }))
            }
        </React.Fragment>
    )

}
