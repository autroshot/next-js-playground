import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import TestImage from '/public/test-image.png';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div
      className={`mx-auto max-w-screen-md py-10 space-y-3 ${inter.className}`}
    >
      <h1 className="text-3xl font-bold">놀이터</h1>
      <div>
        <h2 className="text-lg">링크</h2>
        <div className="space-x-3">
          <Link
            href="/react"
            className="text-blue-600 hover:underline hover:text-blue-500"
          >
            리액트
          </Link>
          <Link
            href="/api-test"
            className="text-blue-600 hover:underline hover:text-blue-500"
          >
            API
          </Link>
        </div>
      </div>
      <Image src={TestImage} alt="테스트용 로컬 이미지" />
      <Image
        src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=1575&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="테스트용 원격 이미지"
        width={640}
        height={381}
        priority
      />
      <p>
        모든 사람은 의견의 자유와 표현의 자유에 대한 권리를 가진다. No one shall
        be subjected to arbitrary arrest, detention or exile.
      </p>
      <p className="font-noto">
        모든 사람은 의견의 자유와 표현의 자유에 대한 권리를 가진다. No one shall
        be subjected to arbitrary arrest, detention or exile.
      </p>
      <p className="font-pretendard">
        모든 사람은 의견의 자유와 표현의 자유에 대한 권리를 가진다. No one shall
        be subjected to arbitrary arrest, detention or exile.
      </p>
      <div className="flex space-x-3">
        <button className="bg-primary">Primary 버튼</button>
        <button className="bg-[#ecc94b]">임시 색상 버튼</button>
      </div>
    </div>
  );
}
