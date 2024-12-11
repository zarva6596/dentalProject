<template>
    <span class="marked-word relative">
        <slot />

        <span class="inline-block absolute bottom-0 right-0 h-1 w-[105%]">
            <img
                src="~/assets/images/underline.png"
                alt="Underline image"
                class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
            />
        </span>
    </span>
</template>
