<template>
    <DSection class="mb-25">
        <div class="flex flex-col items-center mb-2.5 lg:mb-7">
            <DSectionHeading class="capitalize">
                Latest <DMarkedWord>Technology</DMarkedWord>
            </DSectionHeading>

            <DDescriptionWrapper class="max-w-[592px] lg:text-center">
                Thanks to major technological advancements, dentistry allows treating the most complex cases with less time and more efficiency.
            </DDescriptionWrapper>
        </div>

        <div class="lg:flex lg:gap-5 lg:items-center">
            <div class="max-w-[522px] w-full h-[360px] lg:h-[400px] shrink-0 rounded-lg overflow-hidden mb-10 lg:mb-0">
                <img
                    :src="'./pages/about-us/5.png'"
                    alt="Post image"
                    class="h-full w-full object-cover"
                >
            </div>

            <div>
                <h4 class="text-h4 font-medium mb-5">The Future of Dentistry is Digital:</h4>

                <div class="flex flex-col gap-5">
                    <p class="text-b1 font-normal">
                        Dentists today already utilize software to capture insights in clinical decision-making. These practices will continue to develop to integrate AI algorithms that enable clinicians to find the best modalities for their patients.
                    </p>

                    <p class="text-b1 font-normal">
                        In the 21st century, digital radiographs and 3D imaging have become the standard of dental care. Using an intraoral scanner with digitized data for 3D dental impressions (vs. polyvinyl siloxane and rubber base impressions) for a dental crown is now commonplace.
                    </p>

                    <p class="text-b1 font-normal">
                        Artificial intelligence is laying the groundwork for the future of the dental industry. Dental robots can now perform functions such as filling cavities and cleaning or extracting teeth
                    </p>
                </div>
            </div>
        </div>
    </DSection>
</template>