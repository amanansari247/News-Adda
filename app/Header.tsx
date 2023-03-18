import {HomeIcon} from '@heroicons/react/24/solid';
import Link from 'next/link';
import Searchbox from './Searchbox';
import Filternews from './Filternewss';
function Header() {
  return <header>
    <div className="grid grid-cols-3 p-10 items-center">
      <Link href="/" prefetch ={false}>
      <HomeIcon className="h-8 w-8 cursor-pointer"/>
      </Link>
      <Link href="/" prefetch={false}>
        <h1 className='font-serif text-4xl text-center'>
         📰 News Adda
        </h1>
      </Link>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 p-4" >
    <Searchbox/>
    <Filternews/>
    
    </div>
    </header>

}

export default Header
