import { withClerkMiddleware } from '@clerk/nextjs';

export default withClerkMiddleware()

export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: [ '/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};