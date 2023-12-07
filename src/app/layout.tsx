import type { Metadata } from 'next'
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import './globals.css';
import { GeistSans } from 'geist/font/sans'
import "primeflex/themes/primeone-light.css";
import "../../node_modules/primeflex/primeflex.css"
export const metadata: Metadata = {
  title: 'useAlarm(), Remote Controllable Alarms',
  description: 'useAlarm(), Remote Controllable Alarms.',
  keywords: ["useAlarm", "use alarm", "useAlarm()", "useAlarm ()", "yefee alarm setter", "alarm", "online alarm", "set online alarm", "online alarm app", "alarm app", "alarm website"],
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} p-4`}>
        <PrimeReactProvider>
          {children}
        </PrimeReactProvider>
      </body>
    </html>
  )
}
