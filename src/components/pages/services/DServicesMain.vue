<script setup lang="ts">
import DServiceCard from '../home/services/DServiceCard.vue';


</script>

<template>
    <DSection class="pt-10">
        <div class="flex flex-col items-center">
            <DSectionHeading>
                <DMarkedWord>
                    Services
                </DMarkedWord>
            </DSectionHeading>

            <DDescriptionWrapper class="max-w-[526px] text-center">
                We use only the best quality materials on the market in order to provide the best products to our patients.
            </DDescriptionWrapper>
        </div>

        <div>
            <DServiceCard
                v-for="(item, i) in items"
                :key="i"
                :item="item"
            />
        </div>
    </DSection>
</template>