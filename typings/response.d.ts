type APIResponse<T> = APISuccessResponse<T> | APIErrorResponse;

type APISuccessResponse<T> =
{
    success: boolean;
    message: string;
    data: T;
}

type APIErrorResponse =
{
    success: boolean;
    message: string;
    errors: Record<string, string[]> | unknown;
}