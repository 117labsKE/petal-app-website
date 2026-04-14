const RESET_PASSWORD_MODE = "resetPassword";
const APP_RESET_BASE_URL = "periodtracker://auth/reset-password";

export const RESET_EMAIL_REQUEST_URL = process.env.NEXT_PUBLIC_RESET_EMAIL_REQUEST_URL ?? "#";
export const APP_DOWNLOAD_URL = process.env.NEXT_PUBLIC_APP_DOWNLOAD_URL ?? "#";

export type PasswordResetParams = {
  mode: string | null;
  oobCode: string | null;
};

export function parsePasswordResetParams(searchParams: URLSearchParams): PasswordResetParams {
  return {
    mode: searchParams.get("mode"),
    oobCode: searchParams.get("oobCode"),
  };
}

export function isValidPasswordResetRequest(params: PasswordResetParams): params is {
  mode: "resetPassword";
  oobCode: string;
} {
  return params.mode === RESET_PASSWORD_MODE && Boolean(params.oobCode);
}

export function buildResetDeepLink(oobCode: string): string {
  const deepLinkParams = new URLSearchParams({
    mode: RESET_PASSWORD_MODE,
    oobCode,
  });

  return `${APP_RESET_BASE_URL}?${deepLinkParams.toString()}`;
}
