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

export interface GetUserResponseBody {
  id: number;
  username: string;
  nickname: string | null;
  characterId: number | null;
  familyId: number | null;
}

export interface PatchUserCharacterRequestParams {
  characterId: string;
}

export interface PatchUserNicknameRequestBody {
  nickname: string;
}

export interface PatchUserFamiliesRequestBody {
  code: string;
}

// Characters Api

export interface GetCharacterIdRequestParams {
  name: string;
  color: string;
}

export interface GetCharacterResourceRequestParams {
  characterId: string;
}

// Families Api

export interface PostFamilyRequestBody {
  name: string;
}
