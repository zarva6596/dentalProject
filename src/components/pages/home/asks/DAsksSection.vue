<script setup lang="ts">
import DAccordeon from '~/components/universal/accordeon/DAccordeon.vue';
import type { AccordeonItem } from '~/types/accordeon';

const items: AccordeonItem[] = [
    {
        title: 'Can I see who reads my email campaigns?',
        description: 'Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur. Cras adipiscing volutpat non hac enim odio enim.'
    },
    {
        title: 'Do you offer non-profit discounts?',
        description: 'Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur. Cras adipiscing volutpat non hac enim odio enim.'
    },
    {
        title: 'Can I see who reads my email campaigns?',
        description: 'Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur. Cras adipiscing volutpat non hac enim odio enim.'
    },
    {
        title: 'Can I see who reads my email campaigns?',
        description: 'Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur. Cras adipiscing volutpat non hac enim odio enim.'
    },
]
</script>

<template>
    <DSection class="pt-16 lg:pt-12 pb-30">
        <div class="lg:text-center flex flex-col lg:items-center mb-2.5 lg:mb-6">
            <DSectionHeading>
                <DMarkedWord>
                    Frequently Ask Question
                </DMarkedWord>
            </DSectionHeading>

            <DDescriptionWrapper class="max-w-[450px] !text-b2">
                We use only the best quality materials on the market in order to provide the best products to our patients.
            </DDescriptionWrapper>
        </div>

        <div class="flex justify-center">
            <DAccordeon :items />
        </div>
    </DSection>
</template>