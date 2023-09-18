const { comparePass } = require('../helper/bcrypt')
const { generateToken } = require('../helper/jwt')
const {User, statusUser, Favourite} = require('../models/index')

class Controller {

    // root
    static async root(req, res, next) {
        try {
            res.status(200).json('Hello News World -----> RY-Project <-----!')
        } catch (error) {
            next(error)
        }
    }
    // register
    static async register(req, res, next) {
        try {
            const {firstName, lastName, email, password, phoneNumber, address} = req.body
            const newUser = await User.create({firstName, lastName, email, password, phoneNumber, address})
            const newStatus = await statusUser.create({UserId: newUser.id})
            res.status(201).json({id: newUser.id, email: newUser.email, status: newStatus})
        } catch (error) {
            next(error)
        }
    }

    // login
    static async login(req, res, next) {
        try {
            const {email, password} = req.body
            if (!email) {
                throw {name: "email_required"}
            }
            if (!password) {
                throw {name: "password_required"}
            }
            const user = await User.findOne({where: {email}})
            if (!user) {
                throw {name: "invalid_email_password"}
            }
            const passwordValid = comparePass(password, user.password) 
            if (!passwordValid) {
                throw {name: "invalid_email_password"}
            }
            const access_token = generateToken({id: user.id})
            res.status(200).json({access_token})
        } catch (error) {
            next(error)
        }
    }

    // news
    static async news (req, res, next) {
        try {
            const news = "3 party api news"
            console.log(news)
        } catch (error) {
            next(error)
        }
    }

    // news by id
    static async newsById (req, res, next) {
        try {
            const newsbyid = "3 party api news by id"
            console.log(newsbyid)
        } catch (error) {
            next(error)
        }
    }

    // change status user
    static async changeStatus (req, res, next) {
        try {
            console.log("status")

            const {id} = req.params 
            const {status} = req.body

            const userStatus = await userStatus.findByPk(id)
            let statusOld = userStatus.status
            if (!userStatus) {
                throw {name: 'data_not_found'}
            }
            await userStatus.update({status, UserId: req.user.id, expiredAt: Date.now()})
            res.status(200).json(`Status user with id ${id} has been updated from ${statusOld} to ${status}`)
            
        } catch (error) {
            next(error)
        }
    }

}

module.exports = Controller