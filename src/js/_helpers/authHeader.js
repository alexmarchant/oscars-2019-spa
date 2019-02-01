export function authHeader() {
  let token = JSON.parse(localStorage.user).token

  if (token) {
    return { 'Authorization': 'Bearer ' + token };
  } else {
    return {};
  }
}
