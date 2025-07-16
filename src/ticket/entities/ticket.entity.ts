import { Ride } from "src/ride/entities/ride.entity";
import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('tickets')
export class Ticket {

    @PrimaryGeneratedColumn()
    ticketId:number

    @Column()
    stop_from:string

    @Column()
    stop_to:string

    @Column()
    fare:number

    @CreateDateColumn()
    bookedAt:Date

    @ManyToOne(()=>Ride,(r)=>r.ticket)
    ride:Ride
}
