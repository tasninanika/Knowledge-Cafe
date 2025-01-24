import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {

    const {title} = bookmark;

    return (
        <div className="bg-white rounded-md p-4 my-2  w-72">
            <h3 className="text-base">{title}</h3>
        </div>
    );
};

Bookmark.propTypes ={
    bookmark: PropTypes.object
}

export default Bookmark;