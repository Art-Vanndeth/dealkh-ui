export const fileImgUrl = (avatarUrl: string) =>
  (process.env.NEXT_PUBLIC_BASR_URL_IMAGES || '') + avatarUrl;
