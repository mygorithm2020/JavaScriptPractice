import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/user/user.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private userService: UserService){

    }

    async register(userDto: CreateUserDto){
        const user = await this.userService.getUser(userDto.email);
        if (user){
            throw new HttpException(
                '해당 유저가 이미 있슴다.',
                HttpStatus.BAD_REQUEST,
            );
        }

        const encryptedPassword = bcrypt.hashSync(userDto.password, 10);        //암호화처리 10번

        try {
            const user = await this.userService.createUser({
                ...userDto,
                password: encryptedPassword,
            });

            user.password = undefined;
            return user;
        } catch (error) {
            throw new HttpException('server error', 500);
        }
    }

    async validateUser(email: string, password: string){
        const user = await this.userService.getUser(email);
        console.log(user);

        if (!user){
            return null;
        }
        const {password: hashedPassword, ...userInfo} = user;
        if (bcrypt.compareSync(password, hashedPassword)){      //패스워드가 일치하면 성공
            return userInfo;
        }
        return null;
    }
}
