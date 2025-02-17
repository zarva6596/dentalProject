import type { ServiceItem } from "~/types/services"

export const useServiceStore = defineStore('service-store', () => {
    const items = ref<ServiceItem[]>([
        {
            icon: 'teeth',
            title: 'Root Canal Treatment',
            description: 'Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth.',
            route: '/'        
        },
        {
            icon: 'smile',
            title: 'Cosmetic Dentist',
            description: 'Cosmetic dentistry is the branch of dentistry that focuses on improving the appearance of your smile.',
            route: '/'        
        },
        {
            icon: 'implant',
            title: 'Dental Implants',
            description: 'A dental implant is an artificial tooth root that’s placed into your jaw to hold a prosthetic tooth or bridge.',
            route: '/'        
        },

        {
            icon: 'teeth',
            title: 'Teeth Whitening',
            description: 'It`s never been easier to brighten your smile at home. There are all kinds of products you can try.',
            route: '/'        
        },
        {
            icon: 'smile',
            title: 'Emergency Dentistry',
            description: 'In general, any dental problem that needs immediate treatment to stop bleeding, alleviate severe pain.',
            route: '/'        
        },
        {
            icon: 'implant',
            title: 'Prevention',
            description: 'Preventive dentistry is dental care that helps maintain good oral health. a combination of regular dental.',
            route: '/'        
        }, 
    ])
    
    return {
        items,
    }
})