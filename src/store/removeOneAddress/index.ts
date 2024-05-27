import { getAllAdresses } from "../getAllAdresses";

export function removeOneAddress(address: string) {
    try {
        const storage = getAllAdresses()

        const newStorage = storage.filter(item => item.address !== address)

        localStorage.setItem("addresses", JSON.stringify(newStorage))
    } catch (error) {
        throw new Error("Não foi possível remover o endereço!")
    }
}