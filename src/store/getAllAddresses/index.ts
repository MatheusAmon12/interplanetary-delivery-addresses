type Props = {
    type: string,
    receiver: string,
    address: string,
}

export function getAllAdresses() {
    try {
        const storage =  localStorage.getItem("addresses")
        
        const addresses: Props[] = storage ? JSON.parse(storage) : []
        
        return addresses
    } catch (error) {
        throw new Error("Não foi possível ler os endereços!")
    }
}