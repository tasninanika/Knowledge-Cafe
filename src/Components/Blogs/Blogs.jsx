import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=> res.json())
        .then(data=> console.log(data))
    },[])

    return (
        <div>

            <Blog></Blog>
        </div>
    );
};

export default Blogs;