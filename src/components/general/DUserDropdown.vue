<script setup lang="ts">
const user = ref({
    active: true,
    firstName: 'Roman',
    lastName: 'Zarva',
    icon: '/user/user_icon.png',
})
</script>

<template>
    <div>
        <div class="relative">
            <div class="rounded-full overflow-hidden h-14 w-14">
                <img
                    :src="user.icon"
                    :alt="`User icon for ${user.firstName} ${user.lastName}`"
                >
            </div>

            <div
                v-if="user.active"
                class="bg-success border border-white rounded-full h-2.5 w-2.5 absolute top-1 right-1"
            />
        </div>
    </div>
</template>