<script setup lang="ts">
import { useDoctorsStore } from '~/store/useDoctorsStore';
import DDoctorCard from './DDoctorCard.vue';

const { items } = storeToRefs(useDoctorsStore())
</script>

<template>
    <DSection>
        <div class="flex flex-col items-center">
            <DSectionHeading class="capitalize">
                Meet our <DMarkedWord>specialists</DMarkedWord>
            </DSectionHeading>

            <DDescriptionWrapper class="lg:text-center max-w-[480px] mb-0">
                We use only the best quality materials on the market in order to provide the best products to our patients.
            </DDescriptionWrapper>
        </div>

        <DDoctorCard
            v-for="(item, i) in items"
            :key="i"
            v-bind="item"
        />
    </DSection>
</template>