import './globals.css';
import { Outfit } from 'next/font/google';

const outfit = Outfit({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata = {
  title: 'Ashidh P C | Senior QA Engineer',
  description: 'Professional portfolio of Ashidh P C, a Senior Quality Assurance Engineer specializing in manual, API, and automation testing.',
  keywords: 'Ashidh P C, Senior QA Engineer, Quality Assurance, QA Engineer, Automation Testing, Selenium, Jira, Postman',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
