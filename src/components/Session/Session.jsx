import './Session_style/Session.css';

const Session = ({data}) => {
    console.log(data)
    return (
        <div className='container-session' data-aos="fade-right" data-aos-duration="1000">
            <div className='title-session'>
                <h2 className='title-ritm'>{data.title}</h2>
            </div>
            <div className='block-session'>
                <div className={'image-session'}>Standart RitmStyle</div>
                <div className={'image-session'}>RitmStyle for couples</div>
                <div className={'image-session'}>RitmStyle with full immersion underwater</div>
                <div className={'image-session'}>RitmStyle with full immersion underwater</div>
                <div className={'image-session'}>RitmStyle + colorful underwater photo session</div>
                <div className={'image-session'}>RitmStyle is health</div>

            </div>
        </div>
    )
}

export default Session;