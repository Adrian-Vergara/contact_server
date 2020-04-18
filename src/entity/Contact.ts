//importamos los decoradores propios de typeOrm
import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

//establecemos el nombre con el que queremos que se cree nuetra tabla en este caso contacts
@Entity({name: "contacts"})
export class Contact {

    //definición de nuestra primary key
    @PrimaryGeneratedColumn()
    id?: number;

    //definición de nuestro campo name con especificación de longitud de 60 caracteres
    @Column("varchar", {
        length: 60
    })
    name?: string;

    //definición de nuestro campo last_name con especificación de longitud de 60 caracteres, este puede ser nulo
    @Column("varchar",{
        length: 60,
        nullable: true
    })
    last_name?: string;

    //definición de nuestro campo email, longitud de 80 caracteres y es unico
    @Column("varchar",{
        length: 80,
        unique: true
    })
    email?: string;

    //definición de nuestro campo password con longitud de 120 caracteres
    @Column("varchar",{
        length: 120
    })
    password?: number;
}
