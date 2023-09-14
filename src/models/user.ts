import { getModelForClass, index, prop } from "@typegoose/typegoose";

@index({fullName:1})
export class HngUser{
    @prop()
    fullName: string
}
const UserModel = getModelForClass(HngUser, {
    schemaOptions:{
        timestamps:true
    }
})

export default UserModel