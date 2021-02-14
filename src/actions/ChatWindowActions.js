export function addChatRoomsInfo(payload){
  return {
    type : 'ADD_CHAT_ROOMS',
    payload : payload
  }
}
export function currentChatRoom(payload){
  return {
    type : 'CURRENT_CHAT_ROOM',
    payload : payload
  }
}