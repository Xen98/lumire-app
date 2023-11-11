const classColors = {
  red: 'bg-red-400',
  green: 'bg-green-400'
}
export function StatusCard({ data, title }) {
  return (
    <div className="bg-gradient-to-br from-violet-500 to-orange-300 rounded-lg p-1">
      <div className='bg-slate-700 rounded-lg w-full h-[150px] flex flex-col justify-center items-center justify-self-center gap-2'>
        <div className={`${data ? classColors.green : classColors.red} rounded-full w-12 h-12`}>
      
        </div>
        <div className="bg-red-400"></div>
        <div className="bg-green-400"></div>
        <span className="font-bold">{title}</span>
      </div>
    </div>
  )
}