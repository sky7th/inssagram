export const isAuthenticated = request => {
  if (!request.user) {
    throw Error("작업을 진행하기 위해서는 로그인을 해주세요.");
  }
  return;
};