export type ApiRequectConfigs = Omit<RequestInit, "body">;
export type BeforeRequestFn = (
  configs: ApiRequectConfigs,
) => ApiRequectConfigs | Promise<ApiRequectConfigs>;
type AfterResponseFn = <T>(response: Response) => T | Promise<T>;

export default class Api {
  baseUrl: string;
  defaultConfigs: ApiRequectConfigs;

  beforeRequestFn?: BeforeRequestFn;
  afterResponseFn?: AfterResponseFn;

  static create(baseUrl: string, configs: ApiRequectConfigs = {}) {
    return new Api(baseUrl, configs);
  }

  constructor(baseUrl: string, configs: ApiRequectConfigs = {}) {
    this.baseUrl = baseUrl;
    this.defaultConfigs = configs;
  }

  async request<RequestBody, ResponseBody>(
    endpoint: string,
    configs: ApiRequectConfigs = {},
    data?: RequestBody,
  ): Promise<ResponseBody> {
    const requestConfigs = {
      headers: {
        "Content-Type": "application/json",
      },
      ...this.defaultConfigs,
      ...configs,
    };

    // beforeRequest 처리
    const finalConfigs = this.beforeRequestFn
      ? await this.beforeRequestFn(requestConfigs)
      : requestConfigs;

    // fetch 요청 실행
    const response = await fetch(`${this.baseUrl}/${endpoint}`, {
      ...finalConfigs,
      ...(data && { body: JSON.stringify(data) }),
    });

    try {
      return this.afterResponseFn
        ? await this.afterResponseFn(response)
        : await this.defaultAfterResponse(response);
    } catch (error) {
      console.error("Error in afterResponse:", error);
      throw new Error(String(error));
    }
  }

  private async defaultAfterResponse<ResponseBody>(
    response: Response,
  ): Promise<ResponseBody> {
    if (!response.ok) {
      throw new Error(`${response.status} : ${response.statusText}`);
    }
    return response.json();
  }

  beforeRequest(beforeRequestFn: BeforeRequestFn) {
    this.beforeRequestFn = beforeRequestFn;
    return this;
  }

  afterResponse(afterResponseFn: AfterResponseFn) {
    this.afterResponseFn = afterResponseFn;
    return this;
  }

  // GET
  get<ResponseBody>(
    endpoint: string,
    configs?: Omit<ApiRequectConfigs, "method">,
  ): Promise<ResponseBody> {
    return this.request(endpoint, { method: "GET", ...configs });
  }

  // POST
  post<RequestBody, ResponseBody>(
    endpoint: string,
    data?: RequestBody,
    configs?: Omit<ApiRequectConfigs, "method">,
  ): Promise<ResponseBody> {
    return this.request(endpoint, { method: "POST", ...configs }, data);
  }

  // PATCH
  patch<RequestBody, ResponseBody>(
    endpoint: string,
    data?: RequestBody,
    configs?: Omit<ApiRequectConfigs, "method">,
  ): Promise<ResponseBody> {
    return this.request(endpoint, { method: "PATCH", ...configs }, data);
  }
}
