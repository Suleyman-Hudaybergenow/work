import {Column, Entity, PrimaryGeneratedColumn} from "typeorm"
@Entity({
    name: "conventor"
})
export class ConvertorEntity {

    @Column({
        name: 'num',
        type: 'integer',
        nullable: false
    })
    num: number
    constructor(entity?: Partial<ConvertorEntity>) {
        Object.assign(this, entity);
      }
}
