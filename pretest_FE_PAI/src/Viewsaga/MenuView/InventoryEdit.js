import React, {  useEffect } from 'react'
import { useFormik } from 'formik'
import { useDispatch,useSelector } from 'react-redux';
import { GetOneInventoryRequest,EditInventoryRequest } from '../../Redux-saga/Action/InventoryActions';
import * as Yup from 'yup'

export default function MenuAdd(props) {
    const dispatch = useDispatch()
    const { inventory } = useSelector(state => state.inventoryStated)

    useEffect(() => {
        dispatch(GetOneInventoryRequest(props.id))
    }, [])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            nama_barang: inventory.nama_barang,
            detail_barang: inventory.detail_barang,
            unit: inventory.unit,
            harga_barang: inventory.harga_barang,
        },
        validationSchema : Yup.object({
            nama_barang: Yup.string("Enter Name").required("Name is required"),
            detail_barang: Yup.string("Enter Description").required("Description is required"),
            unit: Yup.string("Enter unit").required("unit is required"),
            harga_barang: Yup.string("Enter harga_barang").required(" is required")
        }),
        onSubmit: async (values) => {
                let payload = new FormData();
                payload.append('nama_barang', values.nama_barang)
                payload.append('detail_barang', values.detail_barang)
                payload.append('unit', values.unit)
                payload.append('harga_barang', values.harga_barang)
                payload.append('id_inventory', inventory.id_inventory)
                dispatch(EditInventoryRequest(payload))
            props.closeAdd();
            window.alert('Data Succesfully Edited')
            props.onRefresh();
        }
    })
    return (
        <div>
            <div>
                <label class="block text-sm font-medium text-white">Name : </label>
                <input
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    type="text"
                    name="nama_barang"
                    id="nama_barang"
                    value={formik.values.nama_barang}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="nama_barang"
                />
                {formik.touched.nama_barang && formik.errors.nama_barang ? <span className="mt-2 text-sm text-red-600">{formik.errors.nama_barang}</span> : null}
            </div>
            <div>
                <label class="block text-sm font-medium text-white">Description : </label>
                <input
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    type="text"
                    name="detail_barang"
                    id="detail_barang"
                    value={formik.values.detail_barang}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="detail_barang"
                />
                {formik.touched.detail_barang && formik.errors.detail_barang ? <span className="mt-2 text-sm text-red-600">{formik.errors.detail_barang}</span> : null}
            </div>
            <div>
                <label class="block text-sm font-medium text-white">unit : </label>
                <input
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    type="text"
                    name="unit"
                    id="unit"
                    value={formik.values.unit}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="unit"
                />
                {formik.touched.unit && formik.errors.unit ? <span className="mt-2 text-sm text-red-600">{formik.errors.unit}</span> : null}
            </div>
            <div>
                <label class="block text-sm font-medium text-white">harga barang : </label>
                <input
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    type="text"
                    name="harga_barang"
                    id="harga_barangg"
                    value={formik.values.harga_barang}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="harga_barang"
                />
                {formik.touched.harga_barang && formik.errors.harga_barang ? <span className="mt-2 text-sm text-red-600">{formik.errors.harga_barang}</span> : null}
            </div>
            <div>
                <button type='submit' className="cursor-pointer inline-flex justify-center py-2 px-2 shadow-sm text-sm font-medium rounded-md text-green-500 hover:text-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={formik.handleSubmit}>Simpan </button>
                <button className="cursor-pointer inline-flex justify-center py-2 px-2 shadow-sm text-sm font-medium rounded-md text-red-500 hover:text-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => props.setDisplay(false)}>Cancel </button>
            </div>
        </div>
    )
}