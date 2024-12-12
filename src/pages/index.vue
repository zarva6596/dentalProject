<script setup lang="ts">
import DBookSection from '~/components/pages/home/book/DBookSection.vue';
import DFirstScreen from '~/components/pages/home/firstScreen/DFirstScreen.vue'
import DPhoneFormSection from '~/components/pages/home/phoneForm/DPhoneFormSection.vue';
import DServicesSliderSection from '~/components/pages/home/services/DServicesSliderSection.vue';
</script>

<template>
    <div>
        <DFirstScreen />

        <DServicesSliderSection />

        <DPhoneFormSection />

        <DBookSection />
    </div>
</template>