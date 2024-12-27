<template>
    <DSection class="pt-8 lg:pt-16 pb-24 lg:pb-28">
        <DSectionHeading class="lg:w-1/2 lg:text-center lg:mx-auto">
            We’re <DMarkedWord>welcoming</DMarkedWord> new patients and can’t wait to meet you.
        </DSectionHeading>

        <DDescriptionWrapper class="!mb-12 lg:w-[35%] lg:text-center lg:mx-auto">
            We use only the best quality materials on the market in order to provide the best products to our patients.
        </DDescriptionWrapper>

        <div class="mx-auto rounded-2lg overflow-hidden w-full lg:w-3/4 aspect-square lg:aspect-video mb-12 lg:mb-10">
            <img
                :src="'/pages/home/videoPrevie.png'"
                alt="Video preview"
                class="h-full w-full object-cover object-center"
            >
        </div>

        <DButton class="mx-auto block">Watch Playlist</DButton>
    </DSection>
</template>