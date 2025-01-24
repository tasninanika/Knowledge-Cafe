import PropTypes from 'prop-types';


const Blog = ({blog}) => {
    const {title,cover,author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-20'>
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
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h1 className='text-4xl'>Blogs: {title}</h1>
            <p>{
                hashtags.map((hash, idx)=> <span key={idx} > {hash}</span>)}</p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;