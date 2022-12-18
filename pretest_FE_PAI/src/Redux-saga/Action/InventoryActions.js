import * as ActionType from '../Constant/InventoryConstant'

export const GetInventoryRequest = () => ({
    type: ActionType.GET_INVENTORY_REQUEST
})

export const GetInventorySuccess = (payload) => ({
    type: ActionType.GET_INVENTORY_SUCCESS,
    payload
})

export const GetInventoryFailed = (payload) => ({
    type: ActionType.GET_INVENTORY_FAILED,
    payload
})

export const DelInventoryRequest = (payload) => ({
    type: ActionType.DEL_INVENTORY_REQUEST,
    payload
})

export const DelInventorySuccess = (payload) => ({
    type: ActionType.ADD_INVENTORY_SUCCESS,
    payload
})

export const DelInventoryFailed = (payload) => ({
    type: ActionType.DEL_INVENTORY_FAILED,
    payload
})

export const AddInventoryRequest = (payload) => ({
    type: ActionType.ADD_INVENTORY_REQUEST,
    payload
})

export const AddInventorySuccess = (payload) => ({
    type: ActionType.ADD_INVENTORY_SUCCESS,
    payload
})

export const AddInventoryFailed = (payload) => ({
    type: ActionType.ADD_INVENTORY_FAILED,
    payload
})

export const GetOneInventoryRequest = (payload) => ({
    type: ActionType.GETONE_INVENTORY_REQUEST,
    payload
})

export const GetOneInventorySuccess = (payload) => ({
    type: ActionType.GETONE_INVENTORY_SUCCESS,
    payload
})

export const GetOneInventoryFailed = (payload) => ({
    type: ActionType.GETONE_INVENTORY_FAILED,
    payload
})

export const EditInventoryRequest = (payload) => ({
    type: ActionType.EDIT_INVENTORY_REQUEST,
    payload
})

export const EditInventorySuccess = (payload) => ({
    type: ActionType.EDIT_INVENTORY_SUCCESS,
    payload
})

export const EditInventoryFailed = (payload) => ({
    type: ActionType.EDIT_INVENTORY_FAILED,
    payload
})

export const EditNoInventoryRequest = (payload) => ({
    type: ActionType.EDITNOFILE_INVENTORY_REQUEST,
    payload
})

export const EditNoInventorySuccess = (payload) => ({
    type: ActionType.EDITNOFILE_INVENTORY_SUCCESS,
    payload
})

export const EditNoInventoryFailed = (payload) => ({
    type: ActionType.EDITNOFILE_INVENTORY_FAILED,
    payload
})