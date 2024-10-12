export const send_response = <T>({
  success,
  message,
  ...rest
}: APIResponse<APISuccessResponse<T>>): APIResponse<T> => {
  return { ...rest, success, message };
};
