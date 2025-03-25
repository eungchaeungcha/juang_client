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
  nickName: string | null;
  characterId: number | null;
  familyId: number | null;
}

export interface PatchUserCharacterRequestParams {
  characterId: number;
}

export interface PatchUserNickNameRequestBody {
  nickName: string;
}

export interface PatchUserFamiliesRequestBody {
  code: string;
}

export interface PatchUserResponseBody {
  id: number;
  username: string;
  nickName: string | null;
  characterId: number | null;
  familyId: number | null;
}

// Characters Api

export interface GetCharacterByValuesRequestParams {
  name: string;
  color: string;
}

export interface GetCharacterByIdRequestParams {
  characterId: number;
}

export interface GetCharacterResponseBody {
  id: number;
  name: string;
  color: string;
  link: string;
}

// Families Api

export interface PostFamilyRequestBody {
  name: string;
}

export interface PostFamilyResponseBody {
  code: string;
  id: number;
  name: string;
}
