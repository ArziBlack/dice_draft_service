export type APIResponse<T> = APISuccessResponse<T> | APIErrorResponse;

export type APISuccessResponse<any> = {
  success: boolean;
  message: string;
  data?: any | null;
};

export type APIErrorResponse = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]> | unknown;
};
