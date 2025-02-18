<script setup lang="ts">
import DBlogItemCard from '~/components/pages/home/blog/DBlogItemCard.vue';
import { useBlogStore } from '~/store/useBlogStore';

const { items } = storeToRefs(useBlogStore())

const containerRef = ref(null)

const swiper = useSwiper(containerRef, {
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
    autoplay: {
        delay: 2500
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
})

onMounted(() => swiper.instance)
</script>

<template>
    <DSection
        firs-gradient-section
        class="pt-10 pb-25"
    >
        <div class="flex flex-col items-center relative mb-12">
            <DSectionHeading>
                <DMarkedWord>
                    Blogs
                </DMarkedWord>
            </DSectionHeading>

            <DDescriptionWrapper class="max-w-[455px] text-center">
                We use only the best quality materials on the market in order to provide the best products to our patients.
            </DDescriptionWrapper>

            <div class="flex items-center px-5 py-3.5 bg-white border border-gray-50 rounded-md">
                <img
                    src="~/assets/images/icons/search.svg"
                    alt="Search icon"
                    class="h-6 w-6 mr-2.5"
                />

                <input
                    type="text"
                    placeholder="Search"
                    class="placeholder:text-b2"
                >
            </div>
        </div>

        <div>
            <client-only>
                <swiper-container ref="containerRef" :init="false">
                    <swiper-slide 
                        v-for="(item, i) in items"
                        :key="i"
                        class="px-5"
                    >
                        <DBlogItemCard
                            :key="i"
                            v-bind="item"
                            :class="i && 'hidden lg:block'"
                        />
                    </swiper-slide>
                </swiper-container>

                <DSliderArrows
                    dark-mode
                    class="mt-10 relative"
                />
            </client-only>
        </div>
    </DSection>
</template>