'use client';

import React, { useState } from 'react';

export default function Review() {
  const [review, setReview] = useState('');
  const [status, setStatus] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('https://api.scent-yonsei.com/review', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: review }),
    });

    setSubmitted(true);

    if (res.status === 201) {
      setStatus('소중한 후기가 전달되었습니다! 감사합니다🦁');
      setReview('');
    } else {
      setStatus('제출되지 않았습니다. 다시 시도해주세요!');
    }
  };

  return (
    <div>
      {!submitted ? (
        <>
          <form
            id='reviewForm'
            onSubmit={handleSubmit}
            className='px-4 py-4 rounded-[20px] bg-white'
          >
            <label>
              <textarea
                className='w-[280px] resize-none overflow-y-auto focus:outline-none
                placeholder: text-label-s
                placeholder: text-gray-600'
                value={review}
                onChange={e => setReview(e.target.value)}
                rows={10}
                placeholder='웹사이트 사용 후기를 남겨주세요! 🦁'
                disabled={submitted}
                required
              />
            </label>
          </form>

          <div className='flex justify-center pt-[30px]'>
            <button
              form='reviewForm'
              type='submit'
              className='px-[25px] py-[10px] text-point text-[14px] leading-[24px] font-[700] rounded-[100px] border border-[#DFF4FF] bg-white hover:bg-light200 shadow-[0_0_8px_0_rgba(27,165,225,0.5)]'
            >
              제출하기
            </button>
          </div>
        </>
      ) : (
        <div className='w-[280px] h-[210px] bg-white/70 rounded-[20px] flex items-center justify-center text-point text-label-s text-center px-4'>
          {status}
        </div>
      )}
    </div>
  );
}
