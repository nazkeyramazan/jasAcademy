export function ValidatePhoneNumber(str: string): string {
    const numbers = str.match(/^\d+\d{10}/g)?.join('') ?? ''
    return numbers
}