export const pimcoreImage = (src:string): string => {
    // issue on cart image is undefined the host thats why I added the static hostname as fallback
    const baseURL = process.env.NEXT_PUBLIC_PIMCORE_BASE_URL || 'https://coreshop-headless.localhost';
    return `${baseURL}${src}`;
}