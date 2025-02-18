<script setup lang="ts">
import DBlogItemCard from './DBlogItemCard.vue';
import { useBlogStore } from '~/store/useBlogStore';

const { items } = storeToRefs(useBlogStore())
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