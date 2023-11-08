export function StatusCard({ data, title }) {
  return (
    <div className='bg-slate-700 rounded-lg w-[300px] h-[150px] flex flex-col justify-center items-center justify-self-center gap-2'>
      <div className={`bg-${data ? `green` : `red`}-400 rounded-full w-12 h-12`}>
    
      </div>
      <span className="font-bold">{title}</span>
    </div>
  )
}