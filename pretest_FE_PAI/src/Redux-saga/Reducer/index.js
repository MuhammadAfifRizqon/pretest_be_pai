import { combineReducers } from "redux";


import InventoryReduce from "./InventoryReducer"

const rootReducer = combineReducers({
    inventoryStated: InventoryReduce
})

export default rootReducer