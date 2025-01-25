import PropTypes from 'prop-types';
import { PiBookmarkSimpleBold } from "react-icons/pi";


const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {id,title,cover,author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img src={cover} alt={`Cover picture of the title ${title}`} className='w-full mb-8'/>
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img src={author_img} alt="" className='w-14'/>
                    <div className='ml-6'>
                        <h3 className='text-2xl font-semibold'>{author}</h3>
                        <p className='text-sm text-gray-400 font-semibold'>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className='text-lg'>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmark(blog)}
                    className='ml-1 text-lg '><PiBookmarkSimpleBold />
                    </button>
                </div>
            </div>
            <h1 className='text-4xl font-bold'>{title}</h1>
            <p className='text-base text-gray-500'>{
                hashtags.map((hash, idx)=> <span key={idx} > {hash}</span>)}</p>
            <button className='text-purple-800 underline font-bold cursor-pointer' onClick={()=> handleMarkAsRead(id,reading_time)}>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;