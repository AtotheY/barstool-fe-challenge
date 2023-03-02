interface UrlParams {
  [key: string]: string | number | boolean | undefined;
}

export const getUrlWithParams = (url: string, paramsObject: UrlParams) => {
  const urlSearchParams = new URLSearchParams(
    paramsObject as Record<string, string>
  );
  let urlWithParams = `${url}?${urlSearchParams}`;
  if (urlWithParams.endsWith('?')) {
    urlWithParams = urlWithParams.slice(0, -1);
  }
  return urlWithParams;
};
