import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div className='w-full h-full flex-col-center'>
      <div className='relative w-32 h-36'>
        <Image src='/assets/home_icon.png' alt='로그인 이미지' fill />
      </div>
      <div className='w-full flex-col-center px-10 gap-2'>
        <input className='styleset--input' placeholder='아이디' />
        <input className='styleset--input' placeholder='비밀번호' type='password' />
      </div>
      <div className='w-full flex-col-center px-12 mt-4 gap-2'>
        <button type='button' className='styleset--button'>
          로그인
        </button>
        <div className='text-xs text-gray-dark'>
          계정이 없나요?
          <Link href='/signup' className='font-bold ml-1 text-blue-500'>
            회원가입하기
          </Link>
        </div>
      </div>
    </div>
  );
}
