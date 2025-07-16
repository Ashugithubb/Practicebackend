import { Bus } from "src/bus/entities/bus.entity";
import { Ticket } from "src/ticket/entities/ticket.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('rides')
export class Ride {
    @PrimaryGeneratedColumn()
    rideId:number

    @Column()
    source:string

    @Column()
    destination:string

    @Column()
    departure_time:string

    @Column()
    Stop_duration:string
    
    @Column()
    ride_Date:string

    @Column()
    current_location:string

    @Column()
    publisedAt:string

    @ManyToOne(()=>Bus,(b)=>b.ride)
    bus:Bus

    @OneToMany(()=>Ticket,(t)=>t.ride)
    ticket:Ticket[]
}
