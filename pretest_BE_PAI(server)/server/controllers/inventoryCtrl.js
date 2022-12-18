const findAll = async(req,res )=> {
    try {
        const inventory = await req.context.models.inventory.findAll()
        return res.send(inventory)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const findOne = async(req, res) => {
    try {
        const inventory = await req.context.models.inventory.findOne({
            where : { id_inventory : req.params.id }
        })
        return res.send(inventory)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const create = async (req,res) => {
    try {
        const inventory = await req.context.models.inventory.create({
            nama_barang : req.body.nama_barang,
	        detail_barang : req.body.detail_barang,
	        unit : req.body.unit,
	        harga_barang : req.body.harga_barang
        })
        return res.send(inventory)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const update = async (req,res) => {
    try {
        const inventory = await req.context.models.inventory.update({
            nama_barang : req.body.nama_barang,
	        detail_barang : req.body.detail_barang,
	        unit : req.body.unit,
	        harga_barang : req.body.harga_barang
        },{
            returning : true, where : { id_inventory : req.params.id },
        })
        return res.send(inventory)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const deleted = async (req,res) => {
    try {
        const inventory = await req.context.models.inventory.destroy({
            where : { id_inventory : req.params.id }
        })
        return res.send('deleted'+ inventory + 'rows')
    } catch (error) {
        return res.status(404).send(error)
    }
}

export default {
    findAll,
    findOne,
    create,
    update,
    deleted
}