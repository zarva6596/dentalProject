<script setup lang="ts">
import { useToggle } from '@vueuse/core'
import DLoading from './DLoading.vue';

const [isLoading, toggleLoading] = useToggle(false)

function submitForm() {
    toggleLoading(true)

    setTimeout(() => {
        Object.keys(formModel).forEach(key => formModel[key as keyof typeof formModel] = '')
        toggleLoading(false)
    }, 3000)
}

const formModel = reactive({
    name: '',
    phone: '',
    email: ''
})
</script>

<template>
    <div class="bg-white w-full px-4 lg:px-7 py-8 rounded-xl relative overflow-hidden">
        <DLoading :active="isLoading" />

        <form @submit.prevent="submitForm">
            <h3 class="text-h4 capitalize font-semibold text-center relative">
                Request Appointment
            </h3>

            <div class="mt-10 mb-7 flex flex-col gap-5">
                <input
                    v-model="formModel.name"
                    placeholder="Full Name"
                    type="text"
                    class="border border-gray rounded-md px-5 py-3.5 placeholder:text-b3 w-full"
                >

                <input
                    v-model="formModel.phone"
                    placeholder="Phone Number"
                    type="text"
                    class="border border-gray rounded-md px-5 py-3.5 placeholder:text-b3 w-full"
                >

                <input
                    v-model="formModel.email"
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