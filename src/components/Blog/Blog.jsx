import './Blog_style/Blog.css'

const Blog = (props) => {
    console.log(props)
    return(
        <div className='container-blog' data-aos="fade-right" data-aos-duration="1000">
            <div className='blog'>
                <div className='blog-sections'>
                    <div className={'blog-section'}>
                        <div className={'image-blog'}>
                            <img src={props.img} alt="logo"/>
                        </div>
                        <div className={'description-blogs'}>
                            <div className={'date-blog'}>
                                <p>{props.date}</p>
                            </div>
                            <div className={'title-blog'}>
                                <h3>{props.title}</h3>
                            </div>
                            <div className={'description-blog'}>
                                <p>{props.description}</p>
                            </div>
                            <div className={'btn-blog'}>
                                <button className={'button-blog'}>{props.btn}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Blog;