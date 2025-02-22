// Type Name
// [Method][Domain]Request[Body/Params]

export interface PostRegisterRequestBody {
  username: string;
  password: string;
}

export interface PostLoginRequestBody {
  username: string;
  password: string;
}

export interface GetUsernameDuplicateRequestParams {
  username: string;
}

export interface GetUsernameDuplicateResponseBody {
  duplicate: boolean;
}
