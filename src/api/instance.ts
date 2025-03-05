import Api from "./Api";

const JUANG_API_URL = process.env.JUANG_API_URL ?? "";

export const apiClient = Api.create("/api");
export const apiServer = Api.create(JUANG_API_URL);
