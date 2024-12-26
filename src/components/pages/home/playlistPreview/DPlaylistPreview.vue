<template>
    <DSection class="flex flex-col items-center">
        <div class="flex flex-col items-center lg:text-center">
            <DSectionHeading class="max-w-[630px] capitalize">
                We’re <DMarkedWord>Welcoming</DMarkedWord> new patients and can’t wait to meet you.
            </DSectionHeading>

            <DDescriptionWrapper class="max-w-[460px]">
                We use only the best quality materials on the market in order to provide the best products to our patients.

                <span class="lg:hidden">So don’t worry about anything and book yourself.</span>
            </DDescriptionWrapper>
        </div>

        <div class="max-w-[1064px] aspect-square lg:aspect-3/1.2 rounded-md overflow-hidden mb-12 lg:mb-10">
            <img
                src="~/assets/images/pages/home/videoSection.png"
                alt="Video preview image"
                class="h-full w-full object-cover object-center"    
            />
        </div>

        <DButton>Watch Playlist</DButton>
    </DSection>
</template>