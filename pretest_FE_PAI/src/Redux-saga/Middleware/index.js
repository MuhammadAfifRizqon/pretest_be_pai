import { takeEvery, all } from 'redux-saga/effects'

import { handleGetInventory, handleDelInventory, handleAddInventory, handleGetOneInventory, handleEditInventory, handleEditNoInventory } from './InventoryMiddle'

import * as ActionTypeMenu from '../Constant/InventoryConstant'


function* watchAll() {
    yield all([
        takeEvery(ActionTypeMenu.GET_INVENTORY_REQUEST, handleGetInventory),
        takeEvery(ActionTypeMenu.DEL_INVENTORY_REQUEST, handleDelInventory),
        takeEvery(ActionTypeMenu.ADD_INVENTORY_REQUEST, handleAddInventory),
        takeEvery(ActionTypeMenu.GETONE_INVENTORY_REQUEST, handleGetOneInventory),
        takeEvery(ActionTypeMenu.EDIT_INVENTORY_REQUEST, handleEditInventory),
        takeEvery(ActionTypeMenu.EDITNOFILE_INVENTORY_REQUEST, handleEditNoInventory)

    ])
}

export default watchAll