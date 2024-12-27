<script setup lang="ts">
import type { ReviewsItem } from '~/types/reviews';
import DHappyClientsCard from './DHappyClientsCard.vue';

const items: ReviewsItem[] = [
    {
        name: 'Thomas daniel',
        photo: './pages/home/clients/client1.png',
        stars: 5,
        message: 'Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.'
    },
    {
        name: 'Alena Alex',
        photo: './pages/home/clients/client2.png',
        stars: 5,
        message: 'Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.'
    },
    {
        name: 'Thomas Edison',
        photo: './pages/home/clients/client3.png',
        stars: 5,
        message: 'Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.'
    },
]
</script>

<template>
    <DSection class="pt-25 pb-16 lg:pb-12">
        <div class="flex flex-col lg:items-center lg:text-center">
            <DSectionHeading>
                Our <DMarkedWord>Happy Clients</DMarkedWord>
            </DSectionHeading>

            <DDescriptionWrapper class="max-w-[480px]">
                We use only the best quality materials on the market in order to provide the best products to our patients.
            </DDescriptionWrapper>
        </div>

        <div class="mt-2 lg:mt-10 mb-10 lg:mb-12 flex items-center gap-5">
            <DHappyClientsCard
                v-for="(item, i) in items"
                :key="i"
                v-bind="item"
                :class="i && 'hidden lg:block'"
            />
        </div>

        <DSliderArrows dark-mode />
    </DSection>
</template>