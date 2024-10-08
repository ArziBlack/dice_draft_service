type APIResponse<T> = APISuccessResponse<T> | APIErrorResponse;

type APISuccessResponse<any> =
{
    success: boolean;
    message: string;
    data?: any;
}

type APIErrorResponse =
{
    success: boolean;
    message: string;
    errors?: Record<string, string[]> | unknown;
}