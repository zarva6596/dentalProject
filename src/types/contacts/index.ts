export const INFO_CARD_ICON = {
    LOCATION: 'location',
    TIME: 'time',
    EMAIL: 'email',
    PHONE: 'phone',
    CHAT: 'chat'
} as const;

export interface InfoItem {
    icon: typeof INFO_CARD_ICON[keyof typeof INFO_CARD_ICON]
    title: string
    data: string[]
}