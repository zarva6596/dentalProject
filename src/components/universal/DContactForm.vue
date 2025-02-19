<template>
    <form class="lg:border border-blue-sky lg:rounded-2lg lg:px-10 lg:pt-10 lg:pb-8">
        <div class="flex flex-col gap-3 h-full">
            <div class="lg:flex gap-8">
                <FormDInputText
                    label="First name"
                    placeholder="First name"
                    class="flex-1"
                />

                <FormDInputText
                    label="Last name"
                    placeholder="Last name"
                    class="flex-1"
                />
            </div>

            <FormDInputText
                label="Email"
                placeholder="you@company.com"
            />

            <FormDInputText
                label="Phone number"
                placeholder="+1 (555) 000-0000"
            />

            <FormDInputText
                label="Select date"
                placeholder="December - 02 - 2022"
            />

            <FormDInputText
                class="flex-auto"
                type="textarea"
                label="Message"
            />

            <div class="flex justify-center mt-8">
                <DButton>
                    Book an appointment
                </DButton>
            </div>
        </div>
    </form>
</template>