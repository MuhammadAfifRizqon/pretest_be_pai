import * as ActionType from '../Constant/InventoryConstant'

const INIT_STATE = {
    inventorys: [],
    inventory: []
}

const InventoryReduce = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_INVENTORY_REQUEST:
            return { ...state }
        case ActionType.GET_INVENTORY_SUCCESS:
            return GetInventorySucceed(state, action)
        case ActionType.DEL_INVENTORY_REQUEST:
            return { ...state }
        case ActionType.DEL_INVENTORY_SUCCESS:
            return DelInventorySucceed(state, action)
        case ActionType.ADD_INVENTORY_REQUEST:
            return { ...state }
        case ActionType.ADD_INVENTORY_SUCCESS:
            return AddInventorySucceed(state, action)
        case ActionType.GETONE_INVENTORY_REQUEST:
            return { ...state }
        case ActionType.GETONE_INVENTORY_SUCCESS:
            return GetOneInventorySucceed(state, action)
        case ActionType.EDIT_INVENTORY_REQUEST:
            return { ...state }
        case ActionType.EDIT_INVENTORY_SUCCESS:
            return EditInventorySucceed(state, action)
        case ActionType.EDITNOFILE_INVENTORY_REQUEST:
            return { ...state }
        case ActionType.EDITNOFILE_INVENTORY_SUCCESS:
            return EditNoInventorySucceed(state, action)
        default:
            return GetInventorySucceed(state, action)
    }
}

const GetInventorySucceed = (state, action) => {
    return {
        ...state,
        inventorys: action.payload
    }
}

const GetOneInventorySucceed = (state, action) => {
    return {
        ...state,
        inventory: action.payload
    }
}

const DelInventorySucceed = (state, action) => {
    const { payload } = action
    const filterInventory = state.inventory.filter(el => el.id_inventory !== payload)
    return {
        ...state,
        inventorys: [...filterInventory]
    }
}

const AddInventorySucceed = (state, action) => {
    const { payload } = action
    return {
        ...state,
        inventorys: [...state.inventorys, payload]
    }
}

const EditInventorySucceed = (state, action) => {
    const { payload } = action
    const filterInventory = state.inventorys.filter(el => el.id_inventory !== payload[0].id_inventory)
    return {
        ...state,
        inventorys: [...filterInventory, payload[0]]
    }
}
const EditNoInventorySucceed = (state, action) => {
    const { payload } = action
    const filterInventory = state.inventorys.filter(el => el.id_inventory !== payload[0].id_inventory)
    return {
        ...state,
        inventorys: [...filterInventory, payload[0]]
    }
}

export default InventoryReduce