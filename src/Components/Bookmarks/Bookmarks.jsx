
const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:1/3">
            <h2>Bookmarked Blogs: {bookmarks.length}</h2>
        </div>
    );
};

export default Bookmarks;