import axios from "axios";
import config from "../config/config";

const list = async () => {
    try {
        const result = await axios.get(`${config.domain}/inventory`)
        return result.data
    } catch (error) {
        return await error.message
    }
}
const create = async (payload) => {
    try {
        const result = await axios.post(`${config.domain}/inventory/`, payload)
        return result
    } catch (error) {
        return await error.message
    }
}
const findOne = async (id) => {
    try {
        const result = await axios.get(`${config.domain}/inventory/${id}`)
        return result.data
    } catch (error) {
        return error
    }
}
const update = async (data) => {
    const id_inventory = data.get("id_inventory");
    try {
        const result = await axios.put(`${config.domain}/inventory/${id_inventory}`, data)
        return result
    } catch (error) {
        return error
    }
}
const deleted = async (id) => {
    try {
        const result = await axios.delete(`${config.domain}/inventory/${id}`)
        return result
    } catch (error) {
        return await error.message
    }
}

export default { 
    list, create, findOne, update, deleted
 }