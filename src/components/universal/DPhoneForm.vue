<script setup lang="ts">
const phone = ref('')
</script>

<template>
    <div class="flex">
        <div class="flex items-center gap-2.5 w-full rounded-s-2lg border border-gray-100 pl-5">
            <div class="h-6 aspect-square">
                <img src="~/assets/images/icons/call.svg" alt="Call icon" />
            </div>

            <input
                v-model="phone"
                type="number"
                placeholder="Enter your Phone Number"
                class="w-full"
            >
        </div>

        <DButton class="rounded-s-none">Submit</DButton>
    </div>
</template>