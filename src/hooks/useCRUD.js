import axios from 'axios'
import { useEffect, useState } from 'react'
const urlBase = 'https://users-crud.academlo.tech'


const useCRUD = () => {
    const [apiData, setApiData] = useState()

    // Read
    const getApi = (path) => {
        const url = `${urlBase}${path}/`
        axios.get(url)
            .then(res => setApiData(res.data))
            .catch(err => console.log(err))
    }

    // Create
    const postApi = (path, data) => {
        const url = `${urlBase}${path}/`
        axios.post(url, data)
            .then(res => setApiData(...apiData, res.data))
            .catch(err => console.log(err))
    }

    // Delete
    const deleteApi = (path, id) => {
        const url = `${urlBase}${path}/${id}/`
        axios.delete(url)
            .then(res => setApiData(apiData.filter(user => user.id !== id)))
            .catch(err => console.log(err))
    }

    // Update
    const updateApi = (path, id, data) => {
        const url = `${urlBase}${path}/${id}/`
        axios.patch(url, data)
            .then(res => setApiData(apiData.map(user => user.id === id ? {...user, ...res.data} : user)))
            .catch(err => console.log(err))
    }

    return [apiData, getApi, postApi, deleteApi, updateApi]
 
}

export default useCRUD