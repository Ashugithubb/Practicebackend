import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "../enums/bus.enum";
import { User } from "src/user/entities/user.entity";
import { Ride } from "src/ride/entities/ride.entity";

@Entity('bus')
export class Bus {
    @PrimaryGeneratedColumn()
    regno:number

    @Column()
    model:string

    @Column()
    color:string

    @Column({default: 35})
    total_seats:number

    @Column({type:'enum',enum:Category,default:Category.NON_AC} )
    category:Category

    @Column()
    registeredAt:Date

    @ManyToOne(()=>User,(u)=>u.bus)
    user:User

    @OneToMany(()=>Ride,(r)=>r.bus)
    ride:Ride[]


}
