import { DateTime } from 'luxon'
import { BaseModel, column, computed } from '@ioc:Adonis/Lucid/Orm'
//import authConfig from 'Config/auth'

export default class Todo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: String

  @column()
  public completed:boolean

  @column.dateTime({ autoCreate: true,serialize:(value: DateTime) => value.toFormat('yyyy LLL  dd') })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true ,serialize:(value: DateTime) => value.toFormat('yyyy LLL  dd')})
  public updatedAt: DateTime

  @computed()
  public  get  user(){

    return 'Guilherme'
  }
}

