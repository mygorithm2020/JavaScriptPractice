// 게이트웨이 파일 ws 요청은 여기로 http 요청은 컨트롤러로 전달

import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";

@WebSocketGateway({namespace: 'chat'}) //웹소켓 서버 설정 데코, 네임스페이스 추가
export class ChatGateway {
    @WebSocketServer() server: Server;      // 웹소켓 서버 인스턴스 선언

    @SubscribeMessage('message')    //message 이벤트 구독
    handleMessage(socket: Socket, data: any): void {
        // 비구조화 문법
        const {message, nickname} = data;
        // 전송을 요청한 클라 제외 다른 클라에게 데이터 전송
        socket.broadcast.emit('message', `${nickname} : ${message}`);

        // 접속한 클라에게 메시지 전송 (이벤트명, 데이터)
        // this.server.emit('message', `client-${socket.id.substring(0, 8)} : ${data}`);
    }
}

@WebSocketGateway({namespace: 'room'})
export class RoomGateway {
    // 채팅 게이트웨이 의존성 주입
    constructor(private readonly chatGateway: ChatGateway){}
    rooms = [];

    @WebSocketServer() server: Server;

    @SubscribeMessage('createRoom')
    handleMessage(@MessageBody() data){
        const {nickname, room} = data;

        // 방 생성 시 이벤트 발생
        this.chatGateway.server.emit('notice', {
            message : `${nickname}님이 ${room}방을 만들었습니다.`,
        });
        this.rooms.push(room);
        this.server.emit('rooms', this.rooms);
    }

    @SubscribeMessage('joinRoom')
    handleJoinRoom(socket: Socket, data){
        const {nickname, room, toLeaveRoom} = data;
        socket.leave(toLeaveRoom);          // 기존의 방에서 먼저 나간다.
        this.chatGateway.server.emit("notice", {
            message : `${nickname}님이 ${room}방에 입장했습니다.`,
        });
        socket.join(room);      //새로운 방에 입장
    }

    @SubscribeMessage('message')
    handleMessageToRoom(socket: Socket, data) {
        const {nickname, room, message} = data;
        console.log(data);
        socket.broadcast.to(room).emit('message', {             //나 이외의 사람에게 전송
            message: `${nickname}: ${message}`,
        });
    }
}