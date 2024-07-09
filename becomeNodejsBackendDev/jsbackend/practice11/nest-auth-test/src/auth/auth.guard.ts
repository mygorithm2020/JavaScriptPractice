import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { AuthGuard } from "@nestjs/passport";


@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private authService: AuthService){

    }

    async canActivate(context: any): Promise<boolean> {
        const request = context.switchToHttp().getRequest();

        console.log(request.cookies['login']);
        console.log(request.cookies);

        if (request.cookies['login']){
            return true;
        }

        if (!request.body.email || !request.body.password){
            return false;
        }

        const user = await this.authService.validateUser(
            request.body.email,
            request.body.password
        );

        if (!user) {
            return false;
        }

        request.user = user;
        return true;
    }

}

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
    async canActivate(context: any): Promise<boolean> {
        const result = (await super.canActivate(context)) as boolean;

        const request = context.switchToHttp().getRequest();
        await super.logIn(request);
        return result;
        
    }
}

@Injectable()
export class AuthenticatedGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();
        return request.isAuthenticated();  //세션에서 정보를 읽어서 인증 확인
    }
}


@Injectable()
// google 스트래티지 사용
export class GoogleAuthGuard extends AuthGuard('google') {

    // 스태리티지의 validate() 리턴값인 profile 값을 request.user에 저장
    async canActivate(context: any): Promise<boolean> {

        // google.Strategy의 validate() 메서드를 실행 결과가 null 혹은 false 이면 401에러 발생
        const result = (await super.canActivate(context)) as boolean;

        const request = context.switchToHttp().getRequest();
        await super.logIn(request);
        return result;
    }
}