async function authorization(req, res, next) {

    try {
        // const {id} = req.params

        // const findProduct = await Product.findByPk(id)

        // if (!findProduct) {
        //     throw {name: "not found", id}
        // }

    
        // if (req.user.role === "admin") {
        //     console.log("admin")
        //     next()
        // }
        // else {
        //     console.log("staff")
        //     if (findProduct.authorId !== req.user.id) {
        //         throw {name: "forbidden"}
        //     }
        //     next()         
        // }

    } catch (err) {
        next(err)
    }
}

module.exports = authorization