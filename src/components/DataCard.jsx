export function DataCard({ data, title }) {
  return (
   <div className="bg-gradient-to-br from-violet-500 to-orange-300 rounded-lg p-1">
     <div className='bg-slate-700 rounded-lg w-full h-[150px] flex flex-col justify-center items-center justify-self-center gap-2'>
      <span className='text-3xl text-center font-bold'>{data}%</span>
      <span className="font-bold">{title}</span>
    </div>
   </div>
  )
}