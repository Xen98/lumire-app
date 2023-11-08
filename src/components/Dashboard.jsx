import useWebSocket, { ReadyState } from 'react-use-websocket';
import { useEffect, useState } from 'react';
import { DataCard } from './DataCard';
import { StatusCard } from './StatusCard';

export function Dashboard() {
  const [led, setLed] = useState(0);
  const [lux, setLux] = useState(0);
  const [pwr, setPwr] = useState(0);
  const [mov, setMov] = useState(0);
  
  const [socketUrl] = useState('ws://localhost:3000/ws');
  const {sendMessage, lastMessage, readyState} = useWebSocket(socketUrl);

  useEffect(() => {
    if (lastMessage !== null) {
      console.log(lastMessage);

      const data = JSON.parse(lastMessage.data);

      if (data.pwm) {
        setPwm(data.pwm);
      }

      if (data.lux) {
        setLux(data.lux);
      }
    }
  }, [lastMessage]);

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Conectando',
    [ReadyState.OPEN]: 'En línea',
    [ReadyState.CLOSING]: 'Cerrando',
    [ReadyState.CLOSED]: 'Cerrado',
    [ReadyState.UNINSTANTIATED]: 'Sin instancia',
  }[readyState];

  // const handleClickSendMessage = useCallback(() => sendMessage('Hello'), []);

  return (
    <>
    <div className='mb-16 text-center font-bold'>
      <span>Estado: {connectionStatus}</span>
    </div>

    <main className='grid  grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-4 mx-auto max-w-3xl'>
      <DataCard data={led} title='Potencia de LEDs' />
      <DataCard data={lux} title='Iluminancia' />
      <StatusCard data={pwr} title={pwr ? 'Encendido' : 'Apagado'} />
      <StatusCard data={mov} title={mov ? 'Movimiento detectado' : 'Sin movimiento'} />
    </main>
    </>
  )
}