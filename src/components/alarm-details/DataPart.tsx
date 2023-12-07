'use client'
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { useRef, useState } from 'react';
import Link from 'next/link';


export default function DataPart() {
    const activeDate = new Date();

    const [date, setDate]: any = useState(activeDate);

    const [hour, setHour]: any = useState(null);

    const [minute, setMinute] = useState(null);

    const toast = useRef<Toast>(null);

    const hours = [
        { name: 'Every Hour', code: 'EH' },
        { name: '00', code: 0 },
        { name: '01', code: 1 },
        { name: '02', code: 2 },
        { name: '03', code: 3 },
        { name: '04', code: 4 },
        { name: '05', code: 5 },
        { name: '06', code: 6 },
        { name: '07', code: 7 },
        { name: '08', code: 8 },
        { name: '09', code: 9 },
        { name: '10', code: 10 },
        { name: '11', code: 11 },
        { name: '12', code: 12 },
        { name: '13', code: 13 },
        { name: '14', code: 14 },
        { name: '15', code: 15 },
        { name: '16', code: 16 },
        { name: '17', code: 17 },
        { name: '18', code: 18 },
        { name: '19', code: 19 },
        { name: '20', code: 20 },
        { name: '21', code: 21 },
        { name: '22', code: 22 },
        { name: '23', code: 23 }
    ]

    const minutes = [
        { name: 'Every Minute', code: 'EM' },
        { name: '00', code: 0 },
        { name: '01', code: 1 },
        { name: '02', code: 2 },
        { name: '03', code: 3 },
        { name: '04', code: 4 },
        { name: '05', code: 5 },
        { name: '06', code: 6 },
        { name: '07', code: 7 },
        { name: '08', code: 8 },
        { name: '09', code: 9 },
        { name: '10', code: 10 },
        { name: '11', code: 11 },
        { name: '12', code: 12 },
        { name: '13', code: 13 },
        { name: '14', code: 14 },
        { name: '15', code: 15 },
        { name: '16', code: 16 },
        { name: '17', code: 17 },
        { name: '18', code: 18 },
        { name: '19', code: 19 },
        { name: '20', code: 20 },
        { name: '21', code: 21 },
        { name: '22', code: 22 },
        { name: '23', code: 23 },
        { name: '24', code: 24 },
        { name: '25', code: 25 },
        { name: '26', code: 26 },
        { name: '27', code: 27 },
        { name: '28', code: 28 },
        { name: '29', code: 29 },
        { name: '30', code: 30 },
        { name: '31', code: 31 },
        { name: '32', code: 32 },
        { name: '33', code: 33 },
        { name: '34', code: 34 },
        { name: '35', code: 35 },
        { name: '36', code: 36 },
        { name: '37', code: 37 },
        { name: '38', code: 38 },
        { name: '39', code: 39 },
        { name: '40', code: 40 },
        { name: '41', code: 41 },
        { name: '42', code: 42 },
        { name: '43', code: 43 },
        { name: '44', code: 44 },
        { name: '45', code: 45 },
        { name: '46', code: 46 },
        { name: '47', code: 47 },
        { name: '48', code: 48 },
        { name: '49', code: 49 },
        { name: '50', code: 50 },
        { name: '51', code: 51 },
        { name: '52', code: 52 },
        { name: '53', code: 53 },
        { name: '54', code: 54 },
        { name: '55', code: 55 },
        { name: '56', code: 56 },
        { name: '57', code: 57 },
        { name: '58', code: 58 },
        { name: '59', code: 59 }]

    const show = () => {
        toast.current?.show({ severity: 'success', summary: 'Success', detail: 'Alarm is Setted' });
    };

    const filterActiveHours = () => {
        let filteredHours: any = []

        if (
            date.getDate() === activeDate.getDate() &&
            date.getMonth() === activeDate.getMonth() &&
            date.getFullYear() === activeDate.getFullYear()
        ) {
            let isFirst = true

            filteredHours.push(hours[0]);

            hours.map((hr, i) => {
                if (i >= activeDate.getHours()) {
                    if (isFirst) {
                        isFirst = false;
                    }
                    else {
                        filteredHours.push(hr);
                    }
                }
            })
        }

        else {
            filteredHours = hours;
        }

        return filteredHours;
    };

    const filterActiveMinutes = () => {
        let filteredMintues: any = []

        if (
            hour &&
            date.getDate() === activeDate.getDate() &&
            date.getMonth() === activeDate.getMonth() &&
            date.getFullYear() === activeDate.getFullYear() &&
            hour.code === activeDate.getHours()
        ) {
            let isFirst = true

            filteredMintues.push(minutes[0]);

            minutes.map((mn, i) => {
                if (i - 1 >= activeDate.getMinutes()) {
                    if (isFirst) {
                        isFirst = false;
                    }
                    else {
                        filteredMintues.push(mn);
                    }
                }
            })
        }

        else {
            filteredMintues = minutes;
        }

        return filteredMintues;
    };

    return (
        <div className='flex gap-4 flex-column p-4'>
            <Toast ref={toast} />
            <Calendar
                minDate={activeDate}
                value={date}
                onChange={(e) => setDate(e.value)}
                dateFormat="dd/mm/yy" />

            <Dropdown value={hour} onChange={(e) => setHour(e.value)} options={filterActiveHours()} optionLabel="name"
                placeholder="Select a Hour" className={`w-full ${!hour && 'p-invalid'}`} />

            <Dropdown value={minute} onChange={(e) => setMinute(e.value)} options={filterActiveMinutes()} optionLabel="name"
                placeholder="Select a Minute" className={`w-full ${!minute && 'p-invalid'}`} />

            <Button onClick={() => show()} label='Set The Alarm' disabled={!minute || !hour} />

            <Link href="/">
                <Button label='Go Back To Homepage' icon="pi pi-arrow-left" outlined />
            </Link>
        </div>
    )
}