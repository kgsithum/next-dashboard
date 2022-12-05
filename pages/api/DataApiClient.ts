const HOST = 'https://www.econdb.com';

enum HttpMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

const absUrl = (path: string): string => {
  return `${HOST}${path}`;
};

const request = async (
  method: HttpMethods,
  endpoint: string,
  query?: Record<string, any>
): Promise<any> => {
  if (query) {
    endpoint = `${endpoint}?${new URLSearchParams(query)}`;
  }

  try {
    const response = await fetch(absUrl(endpoint), {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: null,
    });

    let responseBody;
    const contentType = response.headers.get('content-type');

    if (contentType?.includes('application/json')) {
      responseBody = await response.json();
    }

    if (!response.ok) {
      const message =
        responseBody && responseBody.message
          ? responseBody.message
          : `Request failed: ${response.statusText}`;
      throw Error(message);
    }

    return responseBody;
  } catch (err: any) {
    console.error(endpoint, err);
    throw Error(err);
  }
};

// GET
export const get = async (
  endpoint: string,
  query?: Record<string, any>
): Promise<any> => {
  return await request(HttpMethods.GET, endpoint, query);
};
