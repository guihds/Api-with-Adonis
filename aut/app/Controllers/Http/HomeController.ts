// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HomeController {
    public async index(){

        return{Home: "API"}
    }
}