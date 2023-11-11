
import { DataCard } from './DataCard';
import { StatusCard } from './StatusCard';
import { useIlluminationData } from '../hooks/useIlluminationData';

export function Dashboard() {
  const { led, lux, pwr, mov, connectionStatus } = useIlluminationData();

  return (
    <>
    <div className='mb-16 text-center font-bold'>
      <span>Estado: </span><span className={`${connectionStatus.color} text-green`}>{connectionStatus.text}</span>
    </div>

    <main className='grid  grid-cols-1 sm:grid-cols-2 grid-rows-4 sm:grid-rows-2 gap-4 mx-auto max-w-3xl p-10'>
      <StatusCard data={pwr} title={pwr ? 'Encendido' : 'Apagado'} />
      <DataCard data={led} title='Potencia de LEDs' />
      <StatusCard data={mov} title={mov ? 'Movimiento detectado' : 'Sin movimiento'} />
      <DataCard data={lux} title='Iluminancia' />
    </main>
    </>
  )
}