const socket = io('http://localhost:3000/chat'); //네임스페이스추가
const roomSocket = io('http://localhost:3000/room');
const nickname = prompt('닉네임을 입력해주세요.'); //닉네임 입력받기
let currentRoom = ''; // 채팅방 초기 값

function sendMessage() {
    if (currentRoom === ""){
        alert('방을 선택해주세요.');
        return;
    }
    const message = $('#message').val();
    const data = {message, nickname, room: currentRoom};
    $('#chat').append(`<div>나 : ${message}</div>`); //내가 보낸 메시지 바로 추가
    roomSocket.emit('message', data);   // 채팅방 안으로 메시지 보내기
    $('#message').val(""); // 전송 후 입력창 초기화
    return false;
    // socket.emit('message', {message, nickname});
}

// 서버 접속 확인 이벤트
socket.on('connect', () => {
    console.log('connected');
});

socket.on('message', (message) => {
    $('#chat').append(`<div>${message}</div>`);
});

socket.on("notice", (data) => {
    $('#notice').append(`<div>${data.message}</div>`)
})

function createRoom(){
    const room = prompt("생성할 방의 이름을 입력해주세요");
    roomSocket.emit('createRoom', {room, nickname});
}

roomSocket.on('message', (data) => {
    console.log('data');
    $('#chat').append(`<div>${data.message}</div>`);
});

roomSocket.on('rooms', (data) => {
    console.log(data);
    $('#rooms').empty();  //리스트 비우기
    data.forEach((room) => {
        $('#rooms').append(`<li>${room} <button onclick="joinRoom('${room}')">join</button></li>`);
    });
});



function joinRoom(room) {
    if (room === currentRoom){      // 현재 방이랑 같으면 리턴
        return;
    }
    roomSocket.emit('joinRoom', {room, nickname, toLeaveRoom: currentRoom});
    $('#chat').html('');    //채팅방 이동시 기존 채팅 삭제
    currentRoom = room;  //현재 들어 있는 방의 값을 변경
}