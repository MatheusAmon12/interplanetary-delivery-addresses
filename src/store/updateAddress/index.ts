import { getAllAdresses } from "../getAllAddresses";

export function updateAddress(address: string) {
    try {
        const storage = getAllAdresses()

        const storedAddress = storage.filter(item => item.address === address)

        return storedAddress
    } catch (error) {
        throw new Error("Não foi possível atualizar o endereço!")
    }
}