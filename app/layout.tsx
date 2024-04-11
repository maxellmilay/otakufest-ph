import TheHeader from '@/components/TheHeader';
import './globals.css';
import type { Metadata } from 'next';
import TheFooter from '@/components/TheFooter';

export const metadata: Metadata = {
    title: 'Otakufest PH',
    description: 'Official website for Otakufest PH',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`font-mochiy flex flex-col min-h-screen bg-site-secondary`}
            >
                <TheHeader />
                <main className="flex flex-col grow basis-0">{children}</main>
                <TheFooter />
            </body>
        </html>
    );
}
