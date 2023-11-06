import Image from 'next/image'
import { Inter } from 'next/font/google'
import DuyaIcon from '../assets/images/dua-logo.svg'
import HomeIcon from '../assets/images/home-icon.svg'
import AllDuaIcon from '../assets/images/alldua.svg'
import BookMarkIcon from '../assets/images/bookmark.svg'
import BooksIcon from '../assets/images/books.svg'
import DuaInfoIcon from '../assets/images/dua-info.svg'
import MemorizeIcon from '../assets/images/memorize.svg'
import RuqyahIcon from '../assets/images/ruqyah.svg'
import SupportIcon from '../assets/images/support.png'
import SearchIcon from '../assets/images/serach-icon.svg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="max-w-[1880px] mx-auto pt-[40px]">
      <div className="flex justify-between lg:gap-6">
        {/* left sidebar  */}
        <div className="w-[480px] flex gap-6">
          {/* menu bar  */}
          <div className="w-[100px] bg-white flex flex-col items-center py-8 rounded-[24px]">
            <div className="pb-16">
              <Image src={DuyaIcon} width={50} height={50} alt="" />
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="h-10 w-10 flex items-center justify-center bg-[#E8F0F5] rounded-full">
                <Image src={HomeIcon} width={20} height={20} alt="" />
              </div>
              <div className="h-10 w-10 flex items-center justify-center bg-[#E8F0F5] rounded-full">
                <Image src={AllDuaIcon} width={20} height={20} alt="" />
              </div>
              <div className="h-10 w-10 flex items-center justify-center bg-[#E8F0F5] rounded-full">
                <Image src={MemorizeIcon} width={20} height={20} alt="" />
              </div>
              <div className="h-10 w-10 flex items-center justify-center bg-[#E8F0F5] rounded-full">
                <Image src={BookMarkIcon} width={20} height={20} alt="" />
              </div>
              <div className="h-10 w-10 flex items-center justify-center bg-[#E8F0F5] rounded-full">
                <Image src={RuqyahIcon} width={20} height={20} alt="" />
              </div>
              <div className="h-10 w-10 flex items-center justify-center bg-[#E8F0F5] rounded-full">
                <Image src={DuaInfoIcon} width={20} height={20} alt="" />
              </div>
              <div className="h-10 w-10 flex items-center justify-center bg-[#E8F0F5] rounded-full">
                <Image src={BooksIcon} width={20} height={20} alt="" />
              </div>
            </div>
            <div className="pt-16">
              <Image src={SupportIcon} width={50} height={50} alt="" />
            </div>
          </div>
          {/* categories */}
          <div>
            <h2 className="text-2xl">Duas Page</h2>
            <div>
              <div className="bg-[#1FA45B] h-14 px-5 flex items-center justify-center">
                <p className="text-base text-white mx-auto">Categories</p>
              </div>
            </div>
            <div>
              <form>
                <label className="relative block w-full">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                    <Image
                      className="stroke-mute-grey"
                      src={SearchIcon}
                      width={22}
                      height={22}
                      alt=""
                    />
                  </span>
                  <input
                    placeholder="Search Categories"
                    className="h-12 placeholder:text-mute-grey placeholder:text-sm border-[1px] block bg-white w-full rounded-md pl-12 shadow-sm focus:outline-none focus:border-[#1FA45B] focus:ring-[#1FA45B] focus:ring-1  
        sm:text-sm dark:placeholder:text-[#96a2b4]"
                    type="text"
                  />
                </label>
              </form>
            </div>
            <div className='mt-4'>
              <div className=''></div>
            </div>
          </div>
        </div>
        {/* middle content  */}
        <div className="max-w-[1015px]">
          <h2>Middle content</h2>
        </div>
        {/* right sidebar  */}
        <div className="max-w-[300px]">
          <h2>Right sidebar</h2>
        </div>
      </div>
    </main>
  );
}
