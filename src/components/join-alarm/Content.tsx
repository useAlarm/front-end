import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import Link from 'next/link';

export default function Content(){
    return (
        <div className="flex flex-column gap-4 md:text-2xl text-xl">
            <div className="p-input-icon-left">
                <i className="pi pi-calendar" />
                <InputText maxLength={8} placeholder="Enter The Room Code" className="text-center" />
            </div>

            <Button className="w-full" label="Join The Alarm" />

            <Link href="/">
                <Button label='Go Back To Homepage' icon="pi pi-arrow-left" outlined className='w-full' />
            </Link>
        </div>
    )
}