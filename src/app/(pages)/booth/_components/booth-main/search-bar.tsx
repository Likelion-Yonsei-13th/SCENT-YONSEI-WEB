'use client';

import { Search } from 'lucide-react';
import { parseAsStringLiteral, useQueryState } from 'nuqs';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { searches, SearchType } from '../../types/booth-union.type';

export function SearchBar() {
  const [searchQuery, setSearchQuery] = useQueryState(
    'search',
    parseAsStringLiteral(searches).withDefault(''),
  );
  const [inputValue, setInputValue] = useState<SearchType>(searchQuery ?? '');

  const [debouncedValue] = useDebounce(inputValue, 500);
  useEffect(() => {
    if (debouncedValue !== searchQuery) {
      void setSearchQuery(debouncedValue);
    }
  }, [debouncedValue]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      void setSearchQuery(inputValue);
    }
  };

  return (
    <div className='px-3 py-2 w-full h-auto flex items-center justify-start gap-2 border border-gray100 rounded-[10px] bg-white'>
      <Search className='size-6 text-gray500' />
      <input
        type='text'
        placeholder='부스명 또는 단체명을 입력해주세요'
        className='text-label-l text-gray500 w-full focus:outline-none focus:ring-0'
        value={inputValue}
        onChange={e => setInputValue(e.target.value as SearchType)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
