import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {     //믹스인?? 클래스의 일부만 확장하고 싶을 떄 
    constructor(private authService: AuthService){
        super({usernameField: 'email'});
    }

    async validate(email: string, password: string) : Promise<any> {
        const user = await this.authService.validateUser(email, password);

        if (!user) {
            return null;
        }
        return user;
    }
}