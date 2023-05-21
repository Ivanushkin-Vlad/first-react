import logoHeader from './assets/header_logo.png';
import logoHome from './assets/home_image.png';
import sessionPhotoBig from './assets/session_big_photo.png';
import sessionPhoto from './assets/session_photo.png';
import blogPhoto from './assets/blog_photo.png';


const data = {
    header: {
        image: logoHeader,
        links: [
            { name: 'Home', id: 1, path: `/` },
            { name: 'Session', id: 2, path: `/` },
            { name: 'Reviews', id: 3, path: `/` },
            // { name: 'News', id: 4, path: `/` },
            // { name: 'About', id: 5, path: `/` },
            { name: 'Blog', id: 4, path: `/` },
        ],
        btn: 'Sign up for a session',
    },
    home: {
        image: logoHome,
        title: 'Health promotion',
        description: 'Aquatherapy RitmStyle'
    },
    session: {
        title: 'Session RitmStyle',
        imgSessionBig: sessionPhotoBig,
        imgSession: sessionPhoto
    },
    blogs: {
        blog: 
            [
            {id: 1, image: blogPhoto, date: '13.08.2022', title:'New session format', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget massa vitae tempus at pretium lacus viverra. Vitae libero vivamus quis enim quam vitae dictumst nulla duis. Sed nisl nibh et morbi tristique suspendisse morbi. Consequat facilisi tortor consectetur magnis odio. Risus, aenean tortor cras consectetur lacus, ut erat ac et. Fermentum aliquam ac egestas eget risus a. Maecenas sed pellentesque bibendum vitae at praesent sed. Amet pretium arcu gravida arcu ut dui sem quis id. Tristique in leo donec proin odio eget. Neque ut in egestas lacus sit nunc, nec. Proin mattis augue sit leo sagittis nam id accumsan. Pulvinar nunc fermentum vulputate ultrices pulvinar sed ultrices quis.', button: 'Read article'},
            {id: 2, image: blogPhoto, date: '22.11.2022', title:'Read more', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget massa vitae tempus at pretium lacus viverra. Vitae libero vivamus quis enim quam vitae dictumst nulla duis. Sed nisl nibh et morbi tristique suspendisse morbi. Consequat facilisi tortor consectetur magnis odio. Risus, aenean tortor cras consectetur lacus, ut erat ac et. Fermentum aliquam ac egestas eget risus a. Maecenas sed pellentesque bibendum vitae at praesent sed. Amet pretium arcu gravida arcu ut dui sem quis id. Tristique in leo donec proin odio eget. Neque ut in egestas lacus sit nunc, nec. Proin mattis augue sit leo sagittis nam id accumsan. Pulvinar nunc fermentum vulputate ultrices pulvinar sed ultrices quis.', button: 'Read article'},
            {id: 3, image: blogPhoto, date: '23.12.2022', title:'Extra current time', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget massa vitae tempus at pretium lacus viverra. Vitae libero vivamus quis enim quam vitae dictumst nulla duis. Sed nisl nibh et morbi tristique suspendisse morbi. Consequat facilisi tortor consectetur magnis odio. Risus, aenean tortor cras consectetur lacus, ut erat ac et. Fermentum aliquam ac egestas eget risus a. Maecenas sed pellentesque bibendum vitae at praesent sed. Amet pretium arcu gravida arcu ut dui sem quis id. Tristique in leo donec proin odio eget. Neque ut in egestas lacus sit nunc, nec. Proin mattis augue sit leo sagittis nam id accumsan. Pulvinar nunc fermentum vulputate ultrices pulvinar sed ultrices quis.', button: 'Read article'},
            {id: 4, image: blogPhoto, date: '09.05.2021', title:'New RitmStyle office', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget massa vitae tempus at pretium lacus viverra. Vitae libero vivamus quis enim quam vitae dictumst nulla duis. Sed nisl nibh et morbi tristique suspendisse morbi. Consequat facilisi tortor consectetur magnis odio. Risus, aenean tortor cras consectetur lacus, ut erat ac et. Fermentum aliquam ac egestas eget risus a. Maecenas sed pellentesque bibendum vitae at praesent sed. Amet pretium arcu gravida arcu ut dui sem quis id. Tristique in leo donec proin odio eget. Neque ut in egestas lacus sit nunc, nec. Proin mattis augue sit leo sagittis nam id accumsan. Pulvinar nunc fermentum vulputate ultrices pulvinar sed ultrices quis.', button: 'Read article'},
            {id: 5, image: blogPhoto, date: '13.08.2022', title:'New session format', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget massa vitae tempus at pretium lacus viverra. Vitae libero vivamus quis enim quam vitae dictumst nulla duis. Sed nisl nibh et morbi tristique suspendisse morbi. Consequat facilisi tortor consectetur magnis odio. Risus, aenean tortor cras consectetur lacus, ut erat ac et. Fermentum aliquam ac egestas eget risus a. Maecenas sed pellentesque bibendum vitae at praesent sed. Amet pretium arcu gravida arcu ut dui sem quis id. Tristique in leo donec proin odio eget. Neque ut in egestas lacus sit nunc, nec. Proin mattis augue sit leo sagittis nam id accumsan. Pulvinar nunc fermentum vulputate ultrices pulvinar sed ultrices quis.', button: 'Read article'},

        ],
            

        

    },
    footer: {
        topFooter: [
            { titleOnePool: 'Pool WorkClass', address: '58-25 Queens', metro: 'NewQueens' },
            { titleTwoPool: 'Pool VipClass', address: '155-0 Los-Angeles', metro: 'HollywoodState' },
        ]


    }
}


export default data;