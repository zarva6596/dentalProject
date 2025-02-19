import type { DoctorCardItem } from '~/types/team'

export const useDoctorsStore = defineStore('doctors-store', () => {
    const items = ref<DoctorCardItem[]>([
        {
            photo: './pages/about-us/2.png',
            name: 'DR. Brent',
            position: 'Specility in General & Cosmetic Service',
            description: 'Dr. Brent provides general and cosmetic dentistry services at Northern Heights Dental in Flagstaff, Arizona. He has extensive experience in general and cosmetic dentistry, including full mouth restoration, dental veneers, crowns, bridges, dental implants, wisdom teeth extractions, Invisalign, and dentures.  Dr. Brent and his younger sister grew up in Massachusetts with a mother who worked as a hygienist and a grandfather who was a general dentist.',
            route: '#',
        },
        {
            photo: './pages/about-us/3.png',
            name: 'Dr. James Connors',
            position: 'Specility in Oral Surgeon',
            description: 'When it comes to oral surgeons, few can compare to the modern-day legend that is Dr. James Connors. As our oral and maxillofacial surgery specialist, Dr. Connors will brighten your day with his seasoned expertise, welcoming conversations, and – of course – his signature rotation of fun bowties. Dr. Connors and his younger sister grew up in Massachusetts with a mother who worked as a hygienist and a grandfather who was a general dentist.',
            route: '#',
        },
        {
            photo: './pages/about-us/4.png',
            name: 'DR. Ashish J. Vashi',
            position: 'Specility in implant dentistry',
            description: 'Dr. Ashish J. Vashi has been practicing general, cosmetic and implant dentistry in California for over 18 years. He believes in giving the highest quality dentistry in a comfortable, caring environment. He strives to get to know his patients, not just their teeth.including full mouth restoration, dental veneers, crowns, bridges, dental implants, wisdom teeth extractions, Invisalign, and dentures.',
            route: '#',
        }
    ])

    return {
        items
    }
})