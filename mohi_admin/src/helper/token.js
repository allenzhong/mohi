const ACCESS_TOKEN = "access_token";

export function SetAccessToken(token) {
  localStorage.setItem(ACCESS_TOKEN, token)
}

export function GetAccessToken() {
  localStorage.getItem(ACCESS_TOKEN);
}

export function ClearAccessToken() {
  localStorage.removeItem(ACCESS_TOKEN);
}
