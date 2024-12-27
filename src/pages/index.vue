<script setup lang="ts">
import DAsksSection from '~/components/pages/home/asks/DAsksSection.vue';
import DBenefitsSection from '~/components/pages/home/benefits/DBenefitsSection.vue';
import DBlogSection from '~/components/pages/home/blog/DBlogSection.vue';
import DBookSection from '~/components/pages/home/book/DBookSection.vue';
import DFirstScreen from '~/components/pages/home/firstScreen/DFirstScreen.vue'
import DHappyClientsSection from '~/components/pages/home/happyClients/DHappyClientsSection.vue';
import DMeetSection from '~/components/pages/home/meet/DMeetSection.vue';
import DPhoneFormSection from '~/components/pages/home/phoneForm/DPhoneFormSection.vue';
import DPlaylistPreview from '~/components/pages/home/playlistPreview/DPlaylistPreview.vue';
import DServicesSliderSection from '~/components/pages/home/services/DServicesSliderSection.vue';
import DVideoSection from '~/components/pages/home/video/DVideoSection.vue';
import DAskToActionSection from '~/components/pages/home/askToAction/DAskToActionSection.vue';
</script>

<template>
    <div>
        <DFirstScreen />

        <DServicesSliderSection />

        <DPhoneFormSection />

        <DBenefitsSection />

        <DBookSection />

        <DVideoSection />

        <DPlaylistPreview />

        <DMeetSection />

        <DHappyClientsSection />

        <DBlogSection />

        <DAsksSection />

        <DAskToActionSection />
    </div>
</template>