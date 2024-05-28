import { Address } from "@/@types/address"

export function getAllAdresses() {
    try {
        const storage =  localStorage.getItem("addresses")
        
        const addresses: Address[] = storage ? JSON.parse(storage) : []
        
        return addresses
    } catch (error) {
        throw new Error("Não foi possível ler os endereços!")
    }
}