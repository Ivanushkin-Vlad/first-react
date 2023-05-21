import './Session_style/Session.css';

const Session = ({ data }) => {
    console.log(data)
    return (
        <div className='container-session' data-aos="fade-right" data-aos-duration="1000">
            <div className='title-session'>
                <h2 className='title-ritm'>{data.title}</h2>
            </div>
            <div className='block-session'>
                <div className={'image-session'}>
                    <div className={'card-front'}>Standart RitmStyle</div>
                    <div className={'card-back'}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga velit sapiente maxime molestias, voluptates dolorum aut, minima nostrum distinctio porro deserunt quisquam quas, aperiam est quos architecto temporibus necessitatibus harum aliquam iste voluptas sed corporis quibusdam rerum! Possimus, expedita?</div>
                </div>
                <div className={'image-session'}>
                    <div className={'card-front'}>RitmStyle for couples</div>
                    <div className={'card-back'}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga velit sapiente maxime molestias, voluptates dolorum aut, minima nostrum distinctio porro deserunt quisquam quas, aperiam est quos architecto temporibus necessitatibus harum aliquam iste voluptas sed corporis quibusdam rerum! Possimus, expedita?  </div>

                </div>
                <div className={'image-session'}>
                    <div className={'card-front'}>RitmStyle with full immersion underwater</div>
                    <div className={'card-back'}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga velit sapiente maxime molestias, voluptates dolorum aut, minima nostrum distinctio porro deserunt quisquam quas, aperiam est quos architecto temporibus necessitatibus harum aliquam iste voluptas sed corporis quibusdam rerum! Possimus, expedita? </div>
                </div>
                <div className={'image-session'}>
                    <div className={'card-front'}>RitmStyle with full immersion underwater</div>
                    <div className={'card-back'}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga velit sapiente maxime molestias, voluptates dolorum aut, minima nostrum distinctio porro deserunt quisquam quas, aperiam est quos architecto temporibus necessitatibus harum aliquam iste voluptas sed corporis quibusdam rerum! Possimus, expedita? .</div>
                </div>
                <div className={'image-session'}>
                    <div className={'card-front'}>RitmStyle + colorful underwater photo session</div>
                    <div className={'card-back'}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga velit sapiente maxime molestias, voluptates dolorum aut, minima nostrum distinctio porro deserunt quisquam quas, aperiam est quos architecto temporibus necessitatibus harum aliquam iste voluptas sed corporis quibusdam rerum! Possimus, expedita? </div>
                </div>
                <div className={'image-session'}>
                    <div className={'card-front'}>RitmStyle is health</div>
                    <div className={'card-back'}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga velit sapiente maxime molestias, voluptates dolorum aut, minima nostrum distinctio porro deserunt quisquam quas, aperiam est quos architecto temporibus necessitatibus harum aliquam iste voluptas sed corporis quibusdam rerum! Possimus, expedita? .</div>
                </div>

            </div>
        </div>
    )
}

export default Session;