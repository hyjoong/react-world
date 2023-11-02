export const setCookie = (key: string, value: string, maxAge?: number) => {
  const defaultMaxAge = 60 * 60; // 1 hour
  document.cookie = `${key}=${value};max-age=${maxAge ?? defaultMaxAge}`;
};

export const getCookie = (name: string) => {
  const decodedName = name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1'); // 이름을 인코딩하여 정규식에 적용

  const matches = document.cookie.match(
    new RegExp('(?:^|; )' + decodedName + '=([^;]*)'),
  );

  const value = matches ? decodeURIComponent(matches[1]) : null; // 값이 존재할 경우 디코딩하여 반환, 값이 없으면 null 반환
  return value;
};
