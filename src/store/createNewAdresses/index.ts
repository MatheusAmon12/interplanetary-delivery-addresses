import { getAllAdresses } from "../getAllAdresses";

interface AdressProps {
    type: string
    address: string,
    receiver: string,
}

export function createNewAdresses(newAddress: AdressProps) {
    try {
        const storedAdresses = getAllAdresses()
        console.log(storedAdresses)

        if (storedAdresses.length > 0) {
            const addressAlreadyExists = storedAdresses.map((item) => {
                if (item.address === newAddress.address)  return true
                return false
            })

            if (addressAlreadyExists){ 
                console.log('existe')
                throw new Error("Endereço já existe!")
            }
        }

        const storage = JSON.stringify([...storedAdresses, newAddress])
        console.log(storage)
        

        localStorage.setItem('addresses', storage)
    } catch (error) {
        throw new Error("Não foi possível criar o endereço!")
    }
}