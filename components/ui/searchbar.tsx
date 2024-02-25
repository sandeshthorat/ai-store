'use client';
 
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
 
export default function Search({ placeholder }: { placeholder: string }) {
  function handleSearch(term: string) {
    console.log(term);
  }
 
  return (
    <div className="relative flex flex-1 flex-shrink-0   ">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="h-[50px] w-96 peer block  rounded-md border border-cyan-600 bg-slate-800   py-[9px] pl-10 text-xl outline-2 placeholder:text-white ml-1 group border-transparent px-5 transition-colors hover:border-gray-300  
        hover:bg-gray-900 text-gray-300 sm:w-[500px]"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-200 peer-focus:text-gray-300 " />
    </div>
  );
}