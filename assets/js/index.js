

const userDropdown = Vue.createApp({
    data(){
        return{
            activeToggle : false,
        };
    },
}).mount('#user-dropdown');

const sidebar = Vue.createApp({
    data(){
        return{
            navOpen : false,
            //openMenu : false,

            menus : [
                {
                    id:1,
                    menuName: "Home",
                    icons : "fas fa-home"
                },
                {
                    id:2,
                    menuName: "Posts",
                    icons : "fas fa-comments"
                },
                {
                    id:3,
                    menuName: "News",
                    icons : "fas fa-newspaper"
                },
                {
                    id:4,
                    menuName: "Announcements",
                    icons : "fas fa-bullhorn"
                },
                {
                    id:5,
                    menuName: "My Profile",
                    icons : "fas fa-user"
                },
                {
                    id:6,
                    menuName: "Settings",
                    icons : "fas fa-cog"
                },
            ]
        };
    },
    /*
    methods:{
        openNextMenu(event){
            //const allShow = document.querySelectorAll(".show")
            event.currentTarget.classList.toggle("show");
        },
    },
    */
}).mount('#sidebar');

const posts = Vue.createApp({
    data(){
        return{
            posts : [
                {
                    id: 1,
                    image: "https://avatars.githubusercontent.com/u/72465865?v=4",
                    contentText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur assumenda fuga dolorum asperiores hic accusantium est reprehenderit veniam, ex nobis omnis corrupti iste iure porro, provident veritatis quae excepturi unde!",
                    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    date: "10 Nov 2021, 10:34",
                    like: 50,
                    dislike: 15,
                    postOwner: "Abdullah Agsar",
                    readCount: 90,
                    likeType: true,
                    dislikeType: false,
                    readed: true,
                },
                {
                    id: 2,
                    image: "https://avatars.githubusercontent.com/u/72465865?v=4",
                    contentText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur assumenda fuga dolorum asperiores hic accusantium est reprehenderit veniam, ex nobis omnis corrupti iste iure porro, provident veritatis quae excepturi unde!",
                    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    date: "10 Nov 2021, 10:34",
                    like: 50,
                    dislike: 15,
                    postOwner: "Abdullah Agsar",
                    readCount: 90,
                    likeType: false,
                    dislikeType: true,
                    readed: false,
                },
                {
                    id: 3,
                    image: "https://avatars.githubusercontent.com/u/72465865?v=4",
                    contentText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur assumenda fuga dolorum asperiores hic accusantium est reprehenderit veniam, ex nobis omnis corrupti iste iure porro, provident veritatis quae excepturi unde!",
                    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    date: "10 Nov 2021, 10:34",
                    like: 50,
                    dislike: 15,
                    postOwner: "Abdullah Agsar",
                    readCount: 90,
                    likeType: false,
                    dislikeType: false,
                    readed: false,
                },
                {
                    id: 4,
                    image: "https://avatars.githubusercontent.com/u/72465865?v=4",
                    contentText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur assumenda fuga dolorum asperiores hic accusantium est reprehenderit veniam, ex nobis omnis corrupti iste iure porro, provident veritatis quae excepturi unde!",
                    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    date: "10 Nov 2021, 10:34",
                    like: 50,
                    dislike: 15,
                    postOwner: "Abdullah Agsar",
                    readCount: 90,
                    likeType: true,
                    dislikeType: false,
                    readed: true,
                },
                {
                    id: 5,
                    image: "https://avatars.githubusercontent.com/u/72465865?v=4",
                    contentText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur assumenda fuga dolorum asperiores hic accusantium est reprehenderit veniam, ex nobis omnis corrupti iste iure porro, provident veritatis quae excepturi unde!",
                    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    date: "10 Nov 2021, 10:34",
                    like: 50,
                    dislike: 15,
                    postOwner: "Abdullah Agsar",
                    readCount: 90,
                    likeType: true,
                    dislikeType: false,
                    readed: true,
                },
                {
                    id: 6,
                    image: "https://avatars.githubusercontent.com/u/72465865?v=4",
                    contentText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur assumenda fuga dolorum asperiores hic accusantium est reprehenderit veniam, ex nobis omnis corrupti iste iure porro, provident veritatis quae excepturi unde!",
                    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    date: "10 Nov 2021, 10:34",
                    like: 50,
                    dislike: 15,
                    postOwner: "Abdullah Agsar",
                    readCount: 90,
                    likeType: false,
                    dislikeType: false,
                    readed: true,
                },
                {
                    id: 7,
                    image: "https://avatars.githubusercontent.com/u/72465865?v=4",
                    contentText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur assumenda fuga dolorum asperiores hic accusantium est reprehenderit veniam, ex nobis omnis corrupti iste iure porro, provident veritatis quae excepturi unde!",
                    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    date: "10 Nov 2021, 10:34",
                    like: 50,
                    dislike: 15,
                    postOwner: "Abdullah Agsar",
                    readCount: 90,
                    likeType: false,
                    dislikeType: false,
                    readed: true,
                },
                {
                    id: 8,
                    image: "https://avatars.githubusercontent.com/u/72465865?v=4",
                    contentText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur assumenda fuga dolorum asperiores hic accusantium est reprehenderit veniam, ex nobis omnis corrupti iste iure porro, provident veritatis quae excepturi unde!",
                    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    date: "10 Nov 2021, 10:34",
                    like: 50,
                    dislike: 15,
                    postOwner: "Abdullah Agsar",
                    readCount: 90,
                    likeType: true,
                    dislikeType: false,
                    readed: true,
                },
            ],
        };
    },
}).mount('#posts');