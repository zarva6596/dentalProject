<script setup lang="ts">
import type { PostItem } from '~/types/blog';
import DBlogItemCard from './DBlogItemCard.vue';

const items: PostItem[] = [
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
]
</script>

<template>
    <DSection class="py-16 lg:py-12">
        <div class="flex items-end justify-between">
            <div class="max-w-[455px]">
                <DSectionHeading>
                    <DMarkedWord>
                        News & Articles
                    </DMarkedWord>
                </DSectionHeading>

                <DDescriptionWrapper class="!mb-0">
                    We use only the best quality materials on the market in order to provide the best products to our patients.
                </DDescriptionWrapper>
            </div>

            <DButton class="hidden lg:block">View All</DButton>
        </div>

        <div class="mt-12 mb-10 lg:mt-16 lg:mb-12 lg:grid grid-cols-4 gap-5">
            <DBlogItemCard
                v-for="(item, i) in items"
                :key="i"
                v-bind="item"
                :class="i && 'hidden lg:block'"
            />
        </div>

        <div class="lg:flex justify-center hidden">
            <DButton>Check out more</DButton>
        </div>

        <DSliderArrows
            dark-mode
            class="lg:hidden"
        />
    </DSection>
</template>