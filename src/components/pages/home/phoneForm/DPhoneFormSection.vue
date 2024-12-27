<script setup lang="ts">
const phone = ref('')
</script>

<template>
    <DSection class="pt-24 pb-20 flex flex-col gap-12 lg:flex-row lg:items-end lg:gap-40 lg:!px-17.5">
        <div>
            <DSectionHeading class="max-w-[500px]">
                We’re <DMarkedWord>welcoming</DMarkedWord> new patients and can’t wait to meet you.
            </DSectionHeading>

            <DDescriptionWrapper>
                We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself.
            </DDescriptionWrapper>

            <DPhoneForm v-model="phone" />
        </div>

        <div class="shrink-0">
            <DPhoto
                src="/pages/home/smiledClient.png"
                alt="Phone form photo with smiled client"
            />
        </div>
    </DSection>
</template>