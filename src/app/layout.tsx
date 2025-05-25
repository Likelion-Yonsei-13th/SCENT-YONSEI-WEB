import type { Metadata } from 'next';
import '@/styles/globals.css';
import '@/styles/typography.css';
import { GlobalProvider } from './_common/providers/global-provider';
import GoogleAnalytics from './_common/providers/google-analytics';

export const metadata: Metadata = {
  title: 'Scent Of Yonsei',
  description: 'Scent Of Yonsei Festival Website',
  keywords: [
    '연세대학교',
    '연세',
    '축제',
    '대동제',
    'Yonsei Festival',
    '대학축제',
    'Scent Of Yonsei',
    '부스',
    '공연',
    '푸드트럭',
    '멋쟁이사자처럼',
    '동아리',
  ],
  openGraph: {
    title: 'Scent Of Yonsei',
    description: '연세대학교 대동제 공식 웹사이트',
    url: 'https://scent-yonsei.com',
    siteName: 'Scent Of Yonsei',
    images: [
      {
        url: '/img/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Scent Of Yonsei 대동제',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  authors: [{ name: 'LikeLion Yonsei 13th' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        {/* Pretendard 웹폰트 CDN 설정 */}
        <link
          rel='stylesheet'
          as='style'
          href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard-dynamic-subset.css'
          crossOrigin='anonymous'
        />
        {/* viewport 설정 */}
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'
        />
        <meta name='theme-color' content='#44BDF5' />
      </head>
      <body>
        {process.env.GOOGLE_ANALYTICS_ID && (
          <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID} />
        )}
        <GlobalProvider>
          <main
            id='main-layout'
            className='main-background mx-auto min-w-[320px] max-w-[500px] w-full'
          >
            {children}
          </main>
        </GlobalProvider>
      </body>
    </html>
  );
}
