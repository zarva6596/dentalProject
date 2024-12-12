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
</script>

<template>
    <DSection class="bg-blue-light py-12 px-5 mb-40 lg:rounded-2lg lg:px-8 flex flex-col lg:flex-row gap-6">
        <DServiceCard
            v-for="(item, i) in items"
            :key="i"
            :item="item"
        />
    </DSection>
</template>