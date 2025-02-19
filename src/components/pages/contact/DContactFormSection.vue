<template>
    <DSection
        firs-gradient-section
        background
        class="pt-10 pb-10 lg:pb-20"
    >
        <div class="flex flex-col items-center relative">
            <DSectionHeading class="capitalize lg:!text-h1">
                <DMarkedWord>
                    Get in touch
                </DMarkedWord>
            </DSectionHeading>

            <DDescriptionWrapper class="max-w-[424px] lg:text-center">
                Book an Appointment to treat your teeth right now.
            </DDescriptionWrapper>
        </div>

        <div class="relative lg:flex lg:gap-10 lg:px-20 lg:justify-center lg:items-stretch">
            <DContactForm class="mb-16 lg:mb-0 flex-1 lg:order-2" />

            <DContactsInfo class="flex-1" />
        </div>
    </DSection>
</template>