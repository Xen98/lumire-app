import useWebSocket, { ReadyState } from 'react-use-websocket';
import { useEffect, useState } from 'react';

export function useIlluminationData() {
  const [led, setLed] = useState(0);
  const [lux, setLux] = useState(0);
  const [pwr, setPwr] = useState(0);
  const [mov, setMov] = useState(0);

  const [socketUrl] = useState('ws://localhost:3000/ws');
  const {lastMessage, readyState} = useWebSocket(socketUrl);

  useEffect(() => {
    if (lastMessage !== null) {
      console.log(lastMessage);
  
      const data = JSON.parse(lastMessage.data);
  
      console.log(data);
  
      if (data.led !== null) {
        setLed(data.led);
      }
  
      if (data.lux !== null) {
        setLux(data.lux);
      }
  
      if (data.pwr !== null) {
        setPwr(data.pwr);
      }
  
      if (data.mov !== null) {
        setMov(data.mov);
      }
    }
  }, [lastMessage]);
  
  const connectionStatus = {
    [ReadyState.CONNECTING]: {text: 'Conectando', color: 'text-red-400'},
    [ReadyState.OPEN]: {text: 'En línea', color: 'text-green-400'},
    [ReadyState.CLOSING]: {text: 'Cerrando', color: 'text-yellow-400'},
    [ReadyState.CLOSED]: {text: 'Cerrado', color: 'text-red-400'},
    [ReadyState.UNINSTANTIATED]: {text: 'Sin instancia', color: 'text-red-400'},
  }[readyState];

  return {
    led,
    lux,
    pwr,
    mov,
    connectionStatus
  }
}