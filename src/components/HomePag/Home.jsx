import './Home_style/Home.css'


const Home = ({ data }) => {
    console.log(data)
    return (
        <div className="container-home" data-aos="fade-right" data-aos-duration="1000" >
            <div className="home">
                <div className="img-home">
                    <img src={data.image} alt="logo" />
                    <div className='wrapper'>
                        <div className="title-home">
                            <div className="title">
                                {data.title}
                            </div>

                        </div>
                        <div className="description-home">
                            <div className="description">
                                {data.description}
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Home;