<script setup lang="ts">
import { useBlogStore } from '~/store/useBlogStore';
import DBlogItemCard from '~/components/pages/home/blog/DBlogItemCard.vue';

const { items } = storeToRefs(useBlogStore())
</script>

<template>
    <DSection class="pb-6 lg:pb-25">
        <div class="flex items-center justify-between mb-14">
            <DSectionHeading>
                <DMarkedWord>
                    Articles
                </DMarkedWord>
            </DSectionHeading>

            <DDropDown
                title="Sort by"
                :options="[
                    {
                        title: 'New',
                        value: 'new'
                    },
                    {
                        title: 'Old',
                        value: 'old'
                    },
                ]"
            />
        </div>

        <div class="grid lg:grid-cols-4 gap-5 mb-10">
            <DBlogItemCard
                v-for="(item, i) in items"
                :key="i"
                v-bind="item"
                :class="i && 'hidden lg:block'"
            />
        </div>

        <div class="flex justify-center">
            <DButton>Check out more</DButton>
        </div>
    </DSection>
</template>