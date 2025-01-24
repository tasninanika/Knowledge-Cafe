import PropTypes from 'prop-types';
import { PiBookmarkSimpleBold } from "react-icons/pi";


const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {title,cover,author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img src={cover} alt={`Cover picture of the title ${title}`} className='w-full mb-8'/>
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img src={author_img} alt="" className='w-14'/>
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className=''>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmark(blog)}
                    className='ml-1 text-lg '><PiBookmarkSimpleBold />
                    </button>
                </div>
            </div>
            <h1 className='text-4xl'>Blogs: {title}</h1>
            <p>{
                hashtags.map((hash, idx)=> <span key={idx} > {hash}</span>)}</p>
            <button className='text-purple-800 underline font-bold' onClick={handleMarkAsRead}>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;