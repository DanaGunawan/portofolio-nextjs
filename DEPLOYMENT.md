# Deployment Guide

## Vercel Deployment (Recommended)

### Option 1: Using Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to connect your GitHub repository and deploy

### Option 2: Connect GitHub Repository

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New..." → "Project"
4. Import your GitHub repository
5. Configure environment variables if needed
6. Click "Deploy"

## Environment Variables

The portfolio doesn't require any environment variables to run. However, you may want to add these for future enhancements:

```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

Copy `.env.example` to `.env.local` and update values as needed.

## Custom Domain

1. In Vercel dashboard, go to your project settings
2. Go to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Performance Tips

1. **Image Optimization**: All images are optimized by Next.js
2. **Code Splitting**: Automatically handled by Next.js
3. **Caching**: Static content is cached globally on Vercel's CDN
4. **Analytics**: Monitor performance in Vercel Analytics

## Security

- The site uses HTTPS by default on Vercel
- No sensitive data is stored in the frontend
- Environment variables are secure

## Monitoring

### Vercel Analytics
Monitor your deployment performance in the Vercel dashboard:
- Web Vitals
- Performance metrics
- Error tracking

## Rollback

To rollback to a previous deployment:

1. Go to Vercel dashboard
2. Select your project
3. Go to "Deployments"
4. Click "Redeploy" on a previous deployment

## CI/CD Pipeline

Vercel automatically:
- Builds on every push to main/default branch
- Runs linting and type checking
- Generates preview deployments for pull requests
- Deploys to production on merge

## Troubleshooting

### Build Errors
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify TypeScript types are correct

### Performance Issues
- Check Web Vitals in Vercel Analytics
- Optimize images using Next.js Image component
- Use dynamic imports for heavy components

### Deployment Failed
- Check environment variables
- Verify all required files are committed
- Check for syntax errors in configuration files

## Other Platforms

### Netlify
```bash
npm run build
# Deploy the .next folder
```

### GitHub Pages
Not recommended for SSR/SSG sites. Use Vercel instead.

### Self-Hosted (AWS, DigitalOcean, etc.)
```bash
npm run build
npm run start
```

Requires Node.js environment and proper configuration.
