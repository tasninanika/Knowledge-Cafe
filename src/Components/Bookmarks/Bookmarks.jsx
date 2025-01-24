import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div>
            <div className=" ml-4 mt-6 text-center bg-purple-100 rounded-md py-4 border-2 border-purple-300">
                <h3 className="text-xl text-[#6047EC]">Spent Ttime on read: {readingTime} min</h3>
            </div>
            <div className="md:1/3 bg-gray-100 ml-4 mt-2 pt-6 px-4 rounded-lg w-80">
            <h2 className="text-xl text-center mb-6">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
            </div>
            
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;