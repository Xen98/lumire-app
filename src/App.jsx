import useWebSocket, { ReadyState } from 'react-use-websocket';
import { useEffect, useState } from 'react';


// const socket = new WebSocket('ws://localhost:3000/ws');

function App() {
  const [pwm, setPwm] = useState(0);
  const [socketUrl] = useState('ws://localhost:3000/ws');
  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  useEffect(() => {
    if (lastMessage !== null) {
      console.log(lastMessage);

      const data = JSON.parse(lastMessage.data);

      if (data.pwm) {
        setPwm(data.pwm);
      }
    }
  }, [lastMessage]);

  // const handleClickSendMessage = useCallback(() => sendMessage('Hello'), []);

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Conectando',
    [ReadyState.OPEN]: 'En línea',
    [ReadyState.CLOSING]: 'Cerrando',
    [ReadyState.CLOSED]: 'Cerrado',
    [ReadyState.UNINSTANTIATED]: 'Sin instancia',
  }[readyState];

  return (
    <>
      <header className='mt-16 mb-32 text-center font-bold'>
        <h1 className='text-5xl'>Lumire Dashboard</h1>
        <span>Estado: {connectionStatus}</span>
      </header>

      <div className='grid grid-cols-2 grid-rows-2 gap-4 mx-auto px-40'>
        <div className='bg-slate-700 w-[300px] h-[150px] flex justify-center items-center'>
          <span className='text-3xl text-center font-bold'>{pwm}</span>
        </div>
      </div>  
    </>
  )
}

export default App
