import { sendEmail } from '@/utils/mail.utils';
import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import path from 'path';

export async function POST(request: Request) {
    const { name, email, concern, question } = await request.json();

    const htmlTemplate = readFileSync(
        path.join(__dirname, '../../../../../template/emailTemplate.html'),
        'utf-8'
    );

    const emailContent = htmlTemplate
        .replace('{{name}}', name)
        .replace('{{email}}', email)
        .replace('{{type_of_concern}}', concern)
        .replace('{{question}}', question);

    const sender = {
        name: 'Otakufest Site Visitor',
        address: 'no-reply@otakufestph.com',
    };

    const receipients = [
        {
            name: 'Maxell Milay',
            address: 'milaymaxell@gmail.com',
        },
    ];

    try {
        const result = await sendEmail({
            sender,
            receipients,
            subject: concern,
            message: question,
            html: emailContent,
        });

        return NextResponse.json({ message: result.accepted }, { status: 250 });
    } catch (error) {
        return NextResponse.json(
            { message: `Error: ${error}` },
            {
                status: 500,
            }
        );
    }
}
