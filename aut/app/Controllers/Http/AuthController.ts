import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
 import User from "App/Models/user"
import { schema,rules } from '@ioc:Adonis/Core/Validator'
//import { Response } from '@adonisjs/http-server/build/standalone'




export default class AuthController {

    public async register({request, response}:HttpContextContract){
        const validations = await schema.create({

            email:schema.string({}, [

                    rules.email(),
                    rules.unique({ table: 'users' , column: 'email'})

            ]),
            password : schema.string({}, [

                rules.confirmed()
            ])
        })

        const data =  request.validate({schema:validations})

       const user =  await User.create({email:(await data).email,password:(await data).password})
       return response.created(user)
    }


    public async login({request,auth}:HttpContextContract){

        const email = request.input('email')
        const password = request.input('password')
        const token =  await auth.attempt(email,password)

        return token.toJSON()
    }
}
