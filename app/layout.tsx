import type { Metadata } from 'next';
import './globals.css';
import GSAPWrapper from './components/GSAPWrapper';

export const metadata: Metadata = {
    title: 'GTA VI',
    description: 'Fan made GTA VI clone',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={` antialiased`}>
                <GSAPWrapper>{children}</GSAPWrapper>
            </body>
        </html>
    );
}
