type FetchInstanceParams = {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: Record<string, unknown>;
  headers?: Record<string, string>;
  cache?: RequestCache;
  next?: NextFetchRequestConfig;
};

/**
 * API 엔드포인트에 fetch 요청을 생성합니다
 * @param params - fetch 요청을 위한 설정 매개변수
 * @param params.url - 엔드포인트 URL (기본 URL 제외, 예: '/api/v1/users')
 * @param params.method - 사용할 HTTP 메소드
 * @param params.body - 선택적 요청 본문
 * @param params.headers - 선택적 추가 헤더
 * @param params.cache - 선택적 캐시 구성
 * @param params.next - 선택적 Next.js fetch 구성
 * @returns API 응답이 포함된 fetch Promise
 */
export const fetchInstance = ({
  url,
  method,
  body,
  headers,
  cache,
  next,
}: FetchInstanceParams) => {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    method,
    cache,
    next,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });
};
