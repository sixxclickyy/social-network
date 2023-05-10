const Post = (props) => {
    return (
        <div className="sented-posts">
            <div className='circle'></div>
            <p>{props.posts}</p>
            <p>{props.like}</p>
        </div>
    )
}

export default Post;