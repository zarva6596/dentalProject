<script setup lang="ts">
import DContactForm from '~/components/pages/services/DContactForm.vue';
import DServicesMain from '~/components/pages/services/DServicesMain.vue';
import DPlaylistPreview from '~/components/pages/home/playlistPreview/DPlaylistPreview.vue';
import DMeetSection from '~/components/pages/home/meet/DMeetSection.vue';
import DAskToActionSection from '~/components/pages/home/askToAction/DAskToActionSection.vue';
import DAsksSection from '~/components/pages/home/asks/DAsksSection.vue';
</script>

<template>
    <div>
        <DServicesMain />

        <DContactForm />

        <DPlaylistPreview class="!py-25" />

        <DMeetSection />

        <DAsksSection />

        <DAskToActionSection />
    </div>
</template>