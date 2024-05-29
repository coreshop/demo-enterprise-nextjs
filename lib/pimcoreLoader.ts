export const pimcoreImage = (src:string): string => {
    return `https://${process.env.API_HOSTNAME}/${src}`
}