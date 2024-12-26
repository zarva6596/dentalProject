<script setup lang="ts">
import type { ReviewsItem } from '~/types/reviews';

defineProps<ReviewsItem>()
</script>

<template>
    <div class="bg-white rounded-md shadow-md pt-6 px-7 pb-7 lg:max-w-[413px]">
        <div class="flex items-center gap-2 mb-4">
            <div class="rounded-full overflow-hidden aspect-square w-16">
                <img
                    :src="photo"
                    alt="Client photo"
                    class="h-full w-full object-cover object-center"
                >
            </div>

            <div class="">
                <h4 class="text-h4 font-medium mb-1">{{ name }}</h4>

                <div class="flex items-center gap-[1px]">
                    <img
                        v-for="i in stars"
                        :key="i"
                        src="~/assets/images/icons/star.svg"
                        alt="Star icon"
                    >
                </div>
            </div>
        </div>

        <div class="text-text text-b2">
            {{ message }}
        </div>
    </div>
</template>