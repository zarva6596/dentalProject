<script setup lang="ts">
import DAboutUs from '~/components/pages/about-us/DAboutUs.vue';
import DOurDoctors from '~/components/pages/about-us/DOurDoctors.vue'
import DRandomInfo from '~/components/pages/about-us/DRandomInfo.vue';
import DPlaylistPreview from '~/components/pages/home/playlistPreview/DPlaylistPreview.vue';
import DServicesSliderSection from '~/components/pages/home/services/DServicesSliderSection.vue';
</script>

<template>
    <div>
        <DAboutUs />

        <DOurDoctors />

        <DRandomInfo />

        <DServicesSliderSection class="mb-25 !bg-blue-dark" />

        <DPlaylistPreview />
    </div>
</template>