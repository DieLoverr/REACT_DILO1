import {rerenderEntireTree} from "../render";
let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Wulop niga', likesCount: 111},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dmitiy'},
            {id: 2, name: 'Dilovar'},
            {id: 3, name: 'Bakhtovar'},
            {id: 4, name: 'Cergey'},
            {id: 5, name: 'Lev'},
            {id: 6, name: 'Arthem'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: "Mat' ebal!"},
            {id: 4, message: 'Seychas ili voobshe?!'},
            {id: 5, message: 'Kto takoy etot message?!'}
        ]
    },
    sidebar: [
        {id: 1, friend: 'Lev'},
        {id: 2, friend: 'Sergey'},
        {id: 3, friend: 'Arthem'},
    ]
}

export let addPost=(postMessage)=>{
    let newPost ={
        id:2,
        message:postMessage,
        likesCount:  5000,
    }
    state.profilePage.posts.unshift(newPost);
    rerenderEntireTree(state);
}

export default state;