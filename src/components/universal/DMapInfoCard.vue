<template>
    <div class="overflow-hidden rounded-lg w-full h-[300px] relative border lg:border-2 border-blue-sky">
        <img
            :src="'./pages/contacts/map.png'"
            alt="Map image"
            class="h-full w-full object-cover object-center"
        >

        <div
            class="absolute bottom-5 left-5 bg-white rounded-2lg px-7 py-5 flex items-center"
            style="width: calc(100% - 40px);"
        >
            <div class="mr-4 h-14 w-14 rounded-full shrink-0 bg-blue-sky relative">
                <img
                    src="~/assets/images/icons/location.svg"
                    alt="Map icon"
                    class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                >
            </div>

            <div class="flex flex-col">
                <span class="text-b1 font-medium">
                    Office Address
                </span>

                <span class="text-text text-b2 font-normal">
                    1441 Morris Ave, Union, NJ 07083
                </span>
            </div>
        </div>
    </div>
</template>