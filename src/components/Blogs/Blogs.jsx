import { useState } from 'react';
import Blog from '../Blog/Blog';
import './Blogs.css';
import plus from './../../assets/blog_plus.png'


const Blogs = ({data}) => {
    console.log(data)
    const [state, setState] = useState(1);
    let Handler = () =>{
        setState((prev) => prev + 1);
    }
    let Handler1 = () =>{
        debugger
        setState((prev) => prev === 1? prev === 1: prev + 1 - prev);
    }

    return(
        <div className={'container-blogs'}>
            
            <div className='blogs' data-aos="fade-right" data-aos-duration="1000">
                <h3 className='title-blog-h3'>Blog</h3>
                {data.slice(0, state).map(item => <Blog img = {item.image} description = {item.description} date = {item.date} title = {item.title} btn = {item.button}/>)}
                <div className='btn-prev'>
                    <button onClick={Handler} className= 'plus'>Show</button>
                    <button onClick={Handler1} className= 'minus'> Hide </button>
                </div>
            </div>
        </div>

    )
}

export default Blogs;