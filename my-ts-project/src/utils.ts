export function capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export interface UserProfile {
    id:number,
    username: string,
    email: string,
    isActive: boolean
}