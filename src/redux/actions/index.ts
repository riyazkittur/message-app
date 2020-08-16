export const sendMessage=(message:string)=>(dispatch:Function)=>{
dispatch({type:'conversation/sendMessage',payload:message})
}
