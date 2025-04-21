import axios from 'axios'

const AddContact = async (body) => {
    let url = 'https://67037f39bd7c8c1ccd41a62e.mockapi.io/rent-car/api/v1/cars'
    let res = await axios.post(url, body)
    return res
}

const GetAllContact = async () => {
    let url = 'https://67037f39bd7c8c1ccd41a62e.mockapi.io/rent-car/api/v1/cars'
    let res = await axios.get(url)
    return res
}

const GetContactId = async (id) => {
    let url = `https://67037f39bd7c8c1ccd41a62e.mockapi.io/rent-car/api/v1/cars/${id}`
    let res = await axios.get(url)
    return res
}

const EditContact = async (id, body) => {
    let url = `https://67037f39bd7c8c1ccd41a62e.mockapi.io/rent-car/api/v1/cars/${id}`
    body.id = id
    let res = await axios.put(url, body)
    return res
}

const DelContact = async (id) => {
    let url = `https://67037f39bd7c8c1ccd41a62e.mockapi.io/rent-car/api/v1/cars/${id}`
    let res = await axios.delete(url)
    return res
}



const exportedObject = { AddContact, GetAllContact, GetContactId, DelContact, EditContact }

export default exportedObject
