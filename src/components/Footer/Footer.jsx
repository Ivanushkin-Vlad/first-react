import './Footer_style/Footer.css'
import {useState} from "react";
const Footer = ({data}) => {
    console.log(data)
    let flag1 = true;
    let flag2 = false;
    const [state, setState] = useState(flag1)
    const [state1, setState1] = useState(flag2)
    function handlerMapOne (){

        // flag1 = !flag1;
        // flag2 = !flag2;
        setState(() =>(flag1 = true))
        setState1(() =>(flag2 = false))


    }
    function handlerMapOne1 (){

        // flag1 = !flag1;
        // flag2 = !flag2;
        setState(() =>(flag1 = false))
        setState1(() =>(flag2 = true))


    }


    return(
        <div className='footer-container' data-aos="fade-up" data-aos-duration="1000" >
            <footer>
                <div className="top-footer">
                    <div className="iframe-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d781162.5612605764!2d-75.0509623260968!3d40.59760654254904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c289de6c471bb3%3A0xc6e52860e94429a2!2sCommonpoint%20Queens%20at%20Tanenbaum%20Family%20Pool!5e0!3m2!1suk!2sua!4v1684406654714!5m2!1suk!2sua"
                            width="100%" height="424" style={{border:0}} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade" className={state? 'active': 'none'}></iframe>
                        <iframe

                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423291.2688328947!2d-118.7413894948885!3d34.01915970961012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b50f5df4fb%3A0x90e1e4f773994f37!2sThe%20Los%20Angeles%20Athletic%20Club!5e0!3m2!1suk!2sua!4v1684410852273!5m2!1suk!2sua"
                            width="100%" height="424" style={{border:0}} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade" className={state1? 'active': 'none'}></iframe>

                    </div>
                    <div className='adress-ritm'>
                        <div className="ritm NewYork">
                            <h3>{data.topFooter[0].titleOnePool}</h3>
                            <p className='street'>street: {data.topFooter[0].address}</p>
                            <p className='metro'>metro: {data.topFooter[0].metro}</p>
                            <div className="btn-footer">
                                <button onClick={(handlerMapOne)}>Make an appointment</button>
                            </div>

                        </div>
                        <div className="ritm LosAngeles">
                            <h3>{data.topFooter[1].titleTwoPool}</h3>
                            <p className='street'>street: {data.topFooter[1].address}</p>
                            <p className='metro'>metro: {data.topFooter[1].metro}</p>
                            <div className="btn-footer">
                                <button onClick={handlerMapOne1}>Make an appointment</button>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="bottom-footer">
                    <div className='footer-c'>© 2018-2022 RitmStyle</div>
                </div>

            </footer>
        </div>
    )
}

export default Footer;