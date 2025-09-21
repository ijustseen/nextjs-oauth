# OAuth Setup in Next.js

This project is configured to work with OAuth providers through NextAuth.js.

## Supported Providers

- Google
- GitHub

## Setup

### 1. Create .env.local file

Copy the contents from `env-template.txt` to a new `.env.local` file:

```bash
cp env-template.txt .env.local
```

### 2. Configure environment variables

Replace the values in `.env.local` with real ones:

```env
# NextAuth.js Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# GitHub OAuth
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
```

### 3. Get OAuth credentials

#### Google OAuth:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add `http://localhost:3000/api/auth/callback/google` to authorized redirect URIs

#### GitHub OAuth:

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Create a new OAuth App
3. Set Authorization callback URL: `http://localhost:3000/api/auth/callback/github`

### 4. Run the application

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/src/lib/auth.ts` - NextAuth.js configuration
- `/src/app/api/auth/[...nextauth]/route.ts` - API routes for authentication
- `/src/app/auth/signin/page.tsx` - sign-in page
- `/src/app/dashboard/page.tsx` - protected dashboard page
- `/src/app/page.tsx` - main page with sign-in buttons

## Usage

1. On the main page, click "Sign In" for quick sign-in
2. Or click "Choose Provider" to select a specific OAuth provider
3. After signing in, you will be redirected to the dashboard
4. The dashboard displays user information and a sign-out button

## Security

- Never commit the `.env.local` file to git
- Use a strong secret key for `NEXTAUTH_SECRET`
- In production, change `NEXTAUTH_URL` to your domain
