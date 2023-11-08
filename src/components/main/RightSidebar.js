import Image from 'next/image';
import React from 'react'
import ProfileIcon from '../../assets/images/profile.svg'
import DropIcon from '../../assets/images/drop.svg'
import LanguageIcon from '../../assets/images/language.svg'

function RightSidebar() {
  return (
    <div className="max-w-[300px]">
      <div className='flex items-center gap-2 ml-auto max-w-[80px] mb-5'>
      <Image src={ProfileIcon} width={50} height={50} alt="" />
      <Image src={DropIcon} width={10} height={10} alt="" />
      </div>
      <div className='bg-white px-7 py-12 rounded-[32px]'>
        <p className='text-center text-xl'>Settings</p>
        <div className='mt-10'>
          <div className='bg-[#F7F8FA] py-2 border-l-4 border-[#1FA45B] rounded-[4px]'>
            <div className='flex items-center gap-3 px-2'>
            <div className='w-10 h-10 bg-[#E8F0F5] rounded-full flex items-center justify-center'>
            <Image src={LanguageIcon} width={20} height={20} alt="" />
            </div>
            <p className='text-[#1FA45B] font-medium text-base leading-5 xs:text-sm lg-min:text-sm'>Language Settings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar