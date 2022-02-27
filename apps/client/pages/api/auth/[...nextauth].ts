import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          required: true,
          placeholder: 'Username',
        },
        email: {
          label: 'Email',
          type: 'email',
          required: true,
          placeholder: 'Email',
        },
        password: {
          label: 'Password',
          type: 'password',
          required: true,
          placeholder: 'Password',
        },
      },
      authorize: (credentials) => {
        return {
          accessToken: '...',
          refreshToken: '...',
          expiresIn: '...',
          user: {
            id: '...',
            name: '...',
            email: '...',
            avatar: '...',
            role: '...',
          },
        };
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
      }
      return session;
    },
  },
  secret: 'secret',
  jwt: {
    secret: 'secret',
    encode: (payload) => {
      return '...';
    },
  },
});
