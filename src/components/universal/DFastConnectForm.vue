<script setup lang="ts">
import { useToggle } from '@vueuse/core'

const [isLoading, toggleLoading] = useToggle(false)

function submitForm() {
    toggleLoading(true)

    setTimeout(() => toggleLoading(false), 3000)
}
</script>

<template>
    <div class="bg-white w-full px-7 py-8 rounded-xl">
        <form @submit.prevent="submitForm">
            <h3 class="text-h4 capitalize font-semibold text-center">
                Request Appointment
            </h3>

            <div class="mt-10 mb-7 flex flex-col gap-5">
                <input
                    placeholder="Full Name"
                    type="text"
                    class="border border-gray rounded-md px-5 py-3.5 placeholder:text-b3 w-full"
                >

                <input
                    placeholder="Phone Number"
                    type="text"
                    class="border border-gray rounded-md px-5 py-3.5 placeholder:text-b3 w-full"
                >

                <input
                    placeholder="Email Address"
                    type="text"
                    class="border border-gray rounded-md px-5 py-3.5 placeholder:text-b3 w-full"    
                >
            </div>

            <div class="flex justify-center">
                <DButton
                    class="!py-1.5"
                    type="submit"
                >
                    Submit
                </DButton>
            </div>
        </form>
    </div>
</template>