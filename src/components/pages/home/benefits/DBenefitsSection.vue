<script setup lang="ts">
const benefitsList = [
    'Top quality dental team',
    'State of the art dental services',
    'Discount on all dental treatment',
    'Enrollment is quick and easy'
]
</script>

<template>
    <DSection class="bg-blue-light py-20 lg:!px-28 lg:!py-14 lg:flex lg:flex-row-reverse lg:justify-between">
        <div class="mb-12 lg:mb-0 lg:max-w-[500px]">
            <DSectionHeading class="max-w-[332px] lg:max-w-[500px]">
                Why choose <DMarkedWord>Smile</DMarkedWord> for all your dental treatments?
            </DSectionHeading>

            <DDescriptionWrapper class="!mb-5">
                We use only the best quality materials on the market in order to provide the best products to our patients.
            </DDescriptionWrapper>

            <DTextList :items="benefitsList" class="mb-7" />

            <DButton>Book an appointment</DButton>
        </div>

        <div class="w-full lg:w-[414px] overflow-hidden rounded-2lg">
            <img src="/pages/home/benefits.png" alt="Benefits section photo">
        </div>
    </DSection>
</template>