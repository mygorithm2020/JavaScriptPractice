import { Body, Controller, Get, Post, Request, Response, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/user.dto';
import { AuthenticatedGuard, GoogleAuthGuard, LocalAuthGuard, LoginGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {

    }

    @Post('register')
    async register(@Body() userDto: CreateUserDto){
        return await this.authService.register(userDto);
        
    }

    @Post('login')
    async login(@Request() req, @Response() res) {
        console.log(req.body);
        const userInfo = await this.authService.validateUser(
            req.body.email,
            req.body.password
        );
        console.log(userInfo);
        if (userInfo){
            res.cookie('login', JSON.stringify(userInfo), {
                httpOnly: false,        //기본값도 false이며 브라우저에서 쿠기 확인 불가능 XSS 공격 예방
                maxAge: 1000*60*60*24*7  //7day, unit is millsecond
            });
            return res.send({message: 'login success'});
        }
        return res.send({message: 'login failure'});
        
        
    }
    
    @UseGuards(LoginGuard)
    @Post('login2')
    async login2(@Request() req, @Response() res) {
        if (!req.cookies['login'] && req.user){
            res.cookie('login', JSON.stringify(req.user), {
                httpOnly: true,
                maxAge: 1000 * 10  //login test 10s
            });
        }

        return res.send({message : 'login2 success'});
    }

    @UseGuards(LoginGuard)
    @Get('test-guard')
    testGuard() {
        return '로그인된 때만 이글이 보입니다.';
    }

    @UseGuards(LocalAuthGuard)
    @Post("login3")
    login3(@Request() req) {
        return req.user;
    }

    @UseGuards(AuthenticatedGuard)
    @Get("test-guard2")
    testGuardWithSession(@Request() req){
        return req.user;
    }

    // google 로그인으로 이동
    @Get('to-google')
    @UseGuards(GoogleAuthGuard)
    async googleAuth(@Request() req) {

    }

    @Get('google')
    @UseGuards(GoogleAuthGuard)
    async googleAuthRedirect(@Request() req, @Response() res) {
        const {user} = req;
        return res.send(user);
    }
}
