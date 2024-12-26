<script setup lang="ts">
import DServiceCard from './DServiceCard.vue'
import type { ServiceItem } from '~/types/services'

const items: ServiceItem[] = [
    {
        icon: 'teeth',
        title: 'Root Canal Treatment',
        description: 'Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth.',
        route: '/'        
    },
    {
        icon: 'smile',
        title: 'Cosmetic Dentist',
        description: 'Cosmetic dentistry is the branch of dentistry that focuses on improving the appearance of your smile.',
        route: '/'        
    },
    {
        icon: 'implant',
        title: 'Dental Implants',
        description: 'A dental implant is an artificial tooth root that’s placed into your jaw to hold a prosthetic tooth or bridge.',
        route: '/'        
    },
]

const containerRef = ref(null)

const swiper = useSwiper(containerRef, {
    loop: true,
    autoplay: {
        delay: 2500
    },
})

onMounted(() => swiper.instance)
</script>

<template>
    <DSection class="bg-blue-light pt-12 pb-8 !px-0 lg:rounded-2lg lg:!px-8 lg:py-12 flex flex-col lg:flex-row gap-6">
        <div class="lg:hidden">
            <client-only>
                <swiper-container ref="containerRef" :init="false">
                    <swiper-slide 
                        v-for="(item, i) in items"
                        :key="i"
                        class="px-5"
                    >
                        <DServiceCard :item="item" />
                    </swiper-slide>
                </swiper-container>
            </client-only>

            <DSliderArrows
                class="mt-10"
                @prev="swiper.prev()"
                @next="swiper.next()"
            />
        </div>

        <DServiceCard
            v-for="(item, i) in items"
            :key="i"
            :item="item"
            class="hidden lg:flex"
        />
    </DSection>
</template>