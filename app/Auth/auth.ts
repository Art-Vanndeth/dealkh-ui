// import NextAuth from 'next-auth';
// import FacebookProvider from 'next-auth/providers/Facebook';
// import GoogleProvider from 'next-auth/providers/google';
// import GitHubProvider from 'next-auth/providers/github';
//
// const nextAuthConfig = {
//   secret: process.env.NEXTAUTH_SECRET,
//   trustHost: process.env.NEXTAUTH_URL,
// };
//
// export default nextAuthConfig;
//
// export const {
//   handlers: { GET, POST },
//   auth,
//   signIn,
//   signOut,
// } = NextAuth({
//   providers: [
//     FacebookProvider({
//       clientId: process.env.NEXT_PUBLIC_FACEBOOK_ID as string,
//       clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET as string,
//     }),
//     GoogleProvider({
//       clientId: process.env.NEXT_PUBLIC_GOOGLE_ID as string,
//       clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET as string,
//     }),
//     GitHubProvider({
//       clientId: process.env.NEXT_PUBLIC_GITHUB_ID as string,
//       clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET as string,
//     }),
//   ],
// });
