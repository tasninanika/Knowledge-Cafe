import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:1/3">
            <h2>Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}

export default Bookmarks;