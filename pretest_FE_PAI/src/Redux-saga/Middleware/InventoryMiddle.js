import { call, put } from 'redux-saga/effects'
import apiMenu from '../../api/inventoryApi'
import {
    GetInventorySuccess, GetInventoryFailed, AddInventorySuccess, AddInventoryFailed, DelInventorySuccess, DelInventoryFailed,
    GetOneInventorySuccess, GetOneInventoryFailed, EditInventorySuccess, EditInventoryFailed, EditNoInventorySuccess, EditNoInventoryFailed
} from '../Action/InventoryActions'

function* handleGetInventory() {
    try {
        const result = yield call(apiMenu.list)
        yield put(GetInventorySuccess(result))
    } catch (error) {
        yield put(GetInventoryFailed(error))
    }
}

function* handleDelInventory(action) {
    const { payload } = action
    try {
        const result = yield call(apiMenu.deleted, payload)
        yield put(DelInventorySuccess(result))
    } catch (error) {
        yield put(DelInventoryFailed(error))
    }
}

function* handleAddInventory(action) {
    const { payload } = action
    try {
        const result = yield call(apiMenu.create, payload)
        yield put(AddInventorySuccess(result.data))
    } catch (error) {
        yield put(AddInventoryFailed(error))
    }
}

function* handleGetOneInventory(action) {
    const { payload } = action
    try {
        const result = yield call(apiMenu.findOne, payload)
        yield put(GetOneInventorySuccess(result))
    } catch (error) {
        yield put(GetOneInventoryFailed(error))
    }
}

function* handleEditInventory(action) {
    const { payload } = action
    try {
        const result = yield call(apiMenu.update, payload)
        yield put(EditInventorySuccess(result.data[1]))
    } catch (error) {
        yield put(EditInventoryFailed(error))
    }
}

function* handleEditNoInventory(action) {
    const { payload } = action
    try {
        const result = yield call(apiMenu.updateNoFile, payload)
        yield put(EditNoInventorySuccess(result.data[1]))
    } catch (error) {
        yield put(EditNoInventoryFailed(error))
    }
}

export {
    handleGetInventory,
    handleDelInventory,
    handleAddInventory,
    handleGetOneInventory,
    handleEditInventory,
    handleEditNoInventory
}