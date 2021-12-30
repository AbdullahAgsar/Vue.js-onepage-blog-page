

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
                    image: "./assets/images/user.png",
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
                    contentImage: "./assets/images/temp-img.jpg"
                },
                {
                    id: 2,
                    image: "./assets/images/user.png",
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
                    contentImage: ""
                },
                {
                    id: 3,
                    image: "./assets/images/user.png",
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
                    contentImage: ""
                },
                {
                    id: 4,
                    image: "./assets/images/user.png",
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
                    contentImage: "./assets/images/temp-img.jpg"
                },
                {
                    id: 5,
                    image: "./assets/images/user.png",
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
                    contentImage: ""
                },
                {
                    id: 6,
                    image: "./assets/images/user.png",
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
                    contentImage: "./assets/images/temp-img.jpg"
                },
                {
                    id: 7,
                    image: "./assets/images/user.png",
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
                    contentImage: "./assets/images/temp-img.jpg"
                },
                {
                    id: 8,
                    image: "./assets/images/user.png",
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
                    contentImage: ""
                },
            ],
        };
    },
    methods:{
        like(id){
            if(this.posts[id-1].dislikeType===true){
                this.posts[id-1].likeType = true;
                this.posts[id-1].dislikeType = false;
                this.posts[id-1].dislike -= 1;
                this.posts[id-1].like += 1;
            }
            else if(this.posts[id-1].likeType===false && this.posts[id-1].dislikeType===false){
                this.posts[id-1].likeType=true;
                this.posts[id-1].dislike -= 1;
                this.posts[id-1].like += 1;
            }
        },
        dislike(id){
            if(this.posts[id-1].likeType===true){
                this.posts[id-1].likeType = false;
                this.posts[id-1].dislikeType = true;
                this.posts[id-1].like -= 1;
                this.posts[id-1].dislike += 1;
            }
            else if(this.posts[id-1].likeType===false && this.posts[id-1].dislikeType===false){
                this.posts[id-1].dislikeType=true;
                this.posts[id-1].like -= 1;
                this.posts[id-1].dislike += 1;
            }
        }
    }
}).mount('#posts');

const popularPosts = Vue.createApp({
    data(){
        return{
            posts : [
                {
                    id: 1,
                    image: "./assets/images/user.png",
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
                    contentImage: "./assets/images/temp-img.jpg"
                },
                {
                    id: 2,
                    image: "./assets/images/user.png",
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
                    contentImage: ''
                },
                {
                    id: 3,
                    image: "./assets/images/user.png",
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
                    contentImage: ''
                },
                {
                    id: 4,
                    image: "./assets/images/user.png",
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
                    contentImage: "./assets/images/temp-img.jpg"
                },
                {
                    id: 5,
                    image: "./assets/images/user.png",
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
                    contentImage: ''
                },
                {
                    id: 6,
                    image: "./assets/images/user.png",
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
                    contentImage: "./assets/images/temp-img.jpg"
                },
                {
                    id: 7,
                    image: "./assets/images/user.png",
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
                    contentImage: "./assets/images/temp-img.jpg"
                },
                {
                    id: 8,
                    image: "./assets/images/user.png",
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
                    contentImage: ''
                },
            ],
        };
    },
}).mount('#popular-posts');