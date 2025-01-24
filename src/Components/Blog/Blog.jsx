import PropTypes from 'prop-types';


const Blog = ({blog}) => {
    const {title,cover} = blog;
    return (
        <div>
            <img src={cover} alt={`Cover picture of the title${title}`} />
            <h1 className='text-4xl'>Blogs: {title}</h1>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;