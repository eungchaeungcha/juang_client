export async function apiClient<RequestBody, ResponseBody>(
  endpoint: string,
  options: Omit<RequestInit, "body"> = {},
  data?: RequestBody,
): Promise<ResponseBody> {
  const { headers, ...restOptions } = options;

  const response = await fetch(`${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    cache: "no-store",
    ...(data !== undefined ? { body: JSON.stringify(data) } : {}),
    ...restOptions,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "API 요청 실패");
  }

  return response.json();
}

export const api = {
  get: <ResponseBody>(endpoint: string) =>
    apiClient<void, ResponseBody>(endpoint, { method: "GET" }),

  post: <RequestBody, ResponseBody>(endpoint: string, data: RequestBody) =>
    apiClient<RequestBody, ResponseBody>(endpoint, { method: "POST" }, data),

  patch: <RequestBody, ResponseBody>(endpoint: string, data: RequestBody) =>
    apiClient<RequestBody, ResponseBody>(endpoint, { method: "PATCH" }, data),
};
