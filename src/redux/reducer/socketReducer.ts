import { SOCKET,  ISocketType } from './../types/socketType';
import { Socket } from 'socket.io-client'
const socketReducer = (state: any = null , action: ISocketType) => {
   switch (action.type) {
      case SOCKET: 
         return action.payload;
      default:
         return state;
   }
}

 
export default socketReducer;