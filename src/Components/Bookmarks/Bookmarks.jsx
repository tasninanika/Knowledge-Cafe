import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:1/3 bg-gray-100 ml-4 mt-2 pt-6 px-4 rounded-lg w-80">
            <div>
                <h3 className="text-3xl">Reading Time:{readingTime}</h3>
            </div>
            <h2 className="text-xl text-center mb-6">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;