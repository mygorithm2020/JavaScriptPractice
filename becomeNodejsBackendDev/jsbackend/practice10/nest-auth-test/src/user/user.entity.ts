import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id?: number;   //?는 객체 생성 시 필수값이 아닌 선택적인 값임을 표시, 자동 증가 값이므로 데이터 생성 시에는 필요치 않다..

    @Column({unique:true})
    email: string;

    @Column()
    password: string;

    @Column()
    username: string;

    @Column({default:true})
    createDt: Date = new Date();
}