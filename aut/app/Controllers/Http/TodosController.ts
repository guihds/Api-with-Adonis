 import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'


import Todo from "App/Models/Todo";

export default class TodosController {
    public async index({request}){
        const page = request.input('page',1)
        const limit = request.input('per_page',2)
        const todos  =  await Todo.query().paginate(page,limit)
        return todos
        
    }

    public async store({request, response}:HttpContextContract){

        Todo.create({title:request.input('title'),completed:false})
        return response.created({'created':true  })
    }

    public async update({request, response, params}:HttpContextContract){
        const todo =  await Todo.findOrFail(params.id)
        todo.completed  = request.input('completed')
        todo.save()
        return  response.status(202).send(todo)

    }
}

