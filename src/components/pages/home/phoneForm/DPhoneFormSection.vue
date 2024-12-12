<template>
    <DSection class="pt-24 pb-20 flex flex-col gap-12 lg:flex-row lg:items-end lg:gap-40 lg:!px-17.5">
        <div>
            <h2 class="max-w-[500px] text-h3 lg:text-h2 mb-4 lg:mb-5">
                We’re <DMarkedWord>welcoming</DMarkedWord> new patients and can’t wait to meet you.
            </h2>

            <p class="text-b1 mb-7 lg:mb-10">
                We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself.
            </p>

            <DPhoneForm />
        </div>

        <div class="shrink-0">
            <DPhoto
                src="/pages/home/smiledClient.png"
                alt="Phone form photo with smiled client"
            />
        </div>
    </DSection>
</template>