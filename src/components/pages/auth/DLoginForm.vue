<template>
    <form>
        <div class="flex flex-col gap-6">
            <FormDIconInputText
                type="email"
                icon="email"
                placeholder="Enter your Email"
            />

            <FormDIconInputText
                type="password"
                icon="password"
                placeholder="Password"
            />
        </div>

        <div class="flex items-center justify-between my-5">
            <div class="flex items-center gap-1.5">
                <input
                    type="checkbox"
                    id=remember
                >
                
                <label
                    for="remember"
                    class="text-b3 font-normal"
                >
                    Remember Me
                </label>
            </div>

            <div>
                <nuxt-link class="text-b3 font-normal underline">Forget Password?</nuxt-link>
            </div>
        </div>

        <DButton class="w-full">Log in</DButton>

        <div class="flex item-center justify-center gap-2 mt-5 text-b3">
            <span>Not member yet? </span>
            <nuxt-link
                to="/registration"
                class="font-semibold underline"
            >
                Create an account
            </nuxt-link>
        </div>
    </form>
</template>