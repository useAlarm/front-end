import Link from 'next/link';
import { Button } from 'primereact/button';
import { Suspense } from 'react';
import { Skeleton } from 'primereact/skeleton';
import Image from 'next/image'

export default async function Home() {
  const roomId = "ROOM-1234"

  return (
    <main className='flex w-full h-full justify-content-center align-items-center absolute left-0 top-0 flex-column gap-2'>
      
      <Image src="/no-background-logo.png" alt="useAlarm() ~ Best Alarm Setter Website" width="300" height="300" />

      <Suspense fallback={
        <Skeleton width='6rem' height='1rem' borderRadius="16px" />
      }>
        <h1 className='text-2xl text-indigo-500 font-bold'>
          <span className='p-1 border-round bg-indigo-500 text-white'>useAlarm()</span> , Remote Controllable Alarms
        </h1>
      </Suspense>

      <Suspense fallback={
        <Skeleton width='8rem' height='3rem' borderRadius="16px" />
      }>
        <p className='text-center font-medium text-base mb-4'>
          You can create and control alarm rooms which device you want. <br />
          For example create a alarm room and control it from your mobile phone.
        </p>
      </Suspense>

      <Suspense fallback={
        <div className='flex flex-column gap-2'>
          <Skeleton width='4rem' height='0.5rem' borderRadius="16px" />
          <Skeleton width='4rem' height='0.5rem' borderRadius="16px" />
        </div>
      }>
        <div className='flex align-items-center flex-column gap-2'>
          <Link href={`/alarm/${roomId}`} className='w-full'>
            <Button className='w-full' label='Create an alarm' />
          </Link>


          <Link href={`/join`} className='w-full'>
            <Button className="w-full" label='Join an Alarm' />
          </Link>
        </div>
      </Suspense>
    </main>
  )
}