'use client';

import { useEffect, useState } from 'react';

export default function Liked() {
  const [like, setLike] = useState(0);

  const fetchLikes = async () => {
    try {
      const res = await fetch('https://api.scent-yonsei.com/liked');
      const data = await res.json();
      setLike(data.data.count);
    } catch {
      console.log('좋아요 수 반환 실패');
    }
  };

  useEffect(() => {
    fetchLikes();
  }, []);

  const handleLiked = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('https://api.scent-yonsei.com/liked', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.status === 201) {
        fetchLikes();
      } else {
      }
    } catch {}
  };

  return (
    <div className='pt-[58px]'>
      <button
        onClick={handleLiked}
        className='px-4 py-[10px] text-point text-label-l !font-bold rounded-[20px] border border-[#DFF4FF] bg-white shadow-[0_0_8px_0_rgba(27,165,225,0.5)]'
      >
        응원하기
        <br />
        💙 {like}
      </button>
    </div>
  );
}
