type APIResponse<T> = APISuccessResponse<T> | APIErrorResponse;

type APISuccessResponse<any> = {
  success: boolean;
  message: string;
  data?: any | null;
};

type APIErrorResponse = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]> | unknown;
};
