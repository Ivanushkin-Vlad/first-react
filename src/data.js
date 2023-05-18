import logoHeader from './assets/header_logo.png';
import logoHome from './assets/home_image.png';
import sessionPhotoBig from './assets/session_big_photo.png';
import sessionPhoto from './assets/session_photo.png';


const data = {
    header: {
        image: logoHeader,
        links: [
            {name: 'Home', id: 1, path: `/`},
            {name: 'Session', id: 2, path: `/`},
            {name: 'Reviews', id: 3, path: `/`},
            {name: 'News', id: 4, path: `/`},
            {name: 'About', id: 5, path: `/`},
            {name: 'Blog', id: 6, path: `/`},
        ],
        btn: 'Sign up for a session',
    },
    home:{
        image: logoHome,
        title: 'Health promotion',
        description: 'Aquatherapy RitmStyle'
    },
    session:{
        title:'Session RitmStyle',
        imgSessionBig: sessionPhotoBig,
        imgSession: sessionPhoto
    },
    footer:{
        topFooter:[
            { titleOnePool:'Pool WorkClass', address:'58-25 Queens', metro: 'NewQueens'},
            { titleTwoPool:'Pool VipClass', address:'155-0 Los-Angeles', metro: 'HollywoodState'},
            ]


    }

}


export default data;