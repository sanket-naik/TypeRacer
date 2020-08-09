import io from 'socket.io-client';
const socket = io('https://desolate-ridge-42038.herokuapp.com', { transport : ['websocket'] })
// const socket = io('http://localhost:5000')
export default socket;