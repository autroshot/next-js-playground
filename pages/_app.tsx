import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Noto_Sans_KR } from 'next/font/google';
import localFont from 'next/font/local';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-noto-sans-kr',
});
const pretendard = localFont({
  src: '../public/pretendard.woff2',
  variable: '--font-pretendard',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${notoSansKR.variable} ${pretendard.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
