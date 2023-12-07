import DataPart from './../../../components/alarm-details/DataPart';
import 'primeicons/primeicons.css';

export default async function Home({ params }: any) {
  return (
    <main className='flex w-full h-full justify-content-center align-items-center absolute left-0 top-0 flex-column gap-2'>
      <h1 className='text-xl md:text-2xl font-bold text-indigo-500'>
        Room Id: <span className='p-1 border-round bg-indigo-500  text-white'>{params.slug}</span>
      </h1>

      <DataPart />
    </main>
  )
}