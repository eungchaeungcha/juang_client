/**
 * Type Name
 * [Method][Domain]Request[Body/Params]
 */

// Auth Api

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

// Users Api

export interface GetUsersMeResponseBody {
  id: number;
  username: string;
  nickname: string | null;
  characterId: number | null;
  familyId: number | null;
}
