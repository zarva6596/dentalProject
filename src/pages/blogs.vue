<script setup lang="ts">
import DArticlesSection from '~/components/pages/blogs/DArticlesSection.vue';
import DBlogsMain from '~/components/pages/blogs/DBlogsMain.vue';
import DPlaylistPreview from '~/components/pages/home/playlistPreview/DPlaylistPreview.vue';
import DAsksSection from '~/components/pages/home/asks/DAsksSection.vue';
import DAskToActionSection from '~/components/pages/home/askToAction/DAskToActionSection.vue';

</script>

<template>
    <div>
        <DBlogsMain />

        <DArticlesSection />

        <DPlaylistPreview class="!py-25" />

        <DAsksSection />

        <DAskToActionSection />
    </div>
</template>