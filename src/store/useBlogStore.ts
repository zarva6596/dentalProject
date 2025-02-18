import type { PostItem } from "~/types/blog"

export const useBlogStore = defineStore('blog-store', () => {
    const items = ref<PostItem[]>([
        {
            photo: './pages/home/posts/post1.png',
            title: 'Care of your Teeth',
            description: 'Lorem ipsum dolor sit amet consectetur.',
            route: '/',
            author: 'Anita Jackson'
        },
        {
            photo: './pages/home/posts/post2.png',
            title: 'Care of your Teeth',
            description: 'Lorem ipsum dolor sit amet consectetur.',
            route: '/',
            author: 'Anita Jackson'
        },
        {
            photo: './pages/home/posts/post3.png',
            title: 'Care of your Teeth',
            description: 'Lorem ipsum dolor sit amet consectetur.',
            route: '/',
            author: 'Anita Jackson'
        },
        {
            photo: './pages/home/posts/post4.png',
            title: 'Care of your Teeth',
            description: 'Lorem ipsum dolor sit amet consectetur.',
            route: '/',
            author: 'Anita Jackson'
        },
        {
            photo: './pages/home/posts/post5.png',
            title: 'Care of your Teeth',
            description: 'Lorem ipsum dolor sit amet consectetur.',
            route: '/',
            author: 'Anita Jackson'
        },
        {
            photo: './pages/home/posts/post6.png',
            title: 'Care of your Teeth',
            description: 'Lorem ipsum dolor sit amet consectetur.',
            route: '/',
            author: 'Anita Jackson'
        },
        {
            photo: './pages/home/posts/post7.png',
            title: 'Care of your Teeth',
            description: 'Lorem ipsum dolor sit amet consectetur.',
            route: '/',
            author: 'Anita Jackson'
        },
        {
            photo: './pages/home/posts/post8.png',
            title: 'Care of your Teeth',
            description: 'Lorem ipsum dolor sit amet consectetur.',
            route: '/',
            author: 'Anita Jackson'
        },
    ])

    return {
        items
    }
})