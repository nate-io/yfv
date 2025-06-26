# YFV Website

This repository contains the landing page for YFV business. The landing page randomly displays either a black or white version of the site when users visit, while keeping the URL at the root domain.

## Structure

- `website/` - Contains the website files:
  - `index.html` - Entry point that dynamically loads content from either black.html or white.html
  - `black.html` - Dark theme version content
  - `white.html` - Light theme version content
  - `favicon.svg` - Favicon for the site

- `logos/` - Contains various logo files used by the business

## Local Development

To test the website locally, you can use npx with http-server:

```
cd /path/to/yfv/website
npx http-server -p 8000
```

Then visit `http://localhost:8000` in your browser.

## Deployment Options

### Option 1: Firebase Hosting (Recommended)

Firebase Hosting provides a simple, fast hosting solution with CDN, SSL certificates, and custom domains:

1. Install Firebase CLI
   ```
   npm install -g firebase-tools
   ```

2. Login to Firebase
   ```
   firebase login
   ```

3. Initialize your project
   ```
   firebase init hosting
   # Select your Firebase project
   # Set public directory to 'website'
   # Configure as a single-page app: No
   # Set up automatic builds and deploys: No
   ```

4. Deploy to Firebase
   ```
   firebase deploy --only hosting
   ```

### Option 2: GCS Bucket

To deploy this website to a Google Cloud Storage bucket:

1. Create a bucket in GCS (if not already created)
   ```
   gsutil mb -l LOCATION gs://BUCKET_NAME
   ```

2. Make the bucket publicly accessible
   ```
   gsutil iam ch allUsers:objectViewer gs://BUCKET_NAME
   ```

3. Enable website configuration for the bucket
   ```
   gsutil web set -m index.html gs://BUCKET_NAME
   ```

4. Upload the website files
   ```
   gsutil -m cp -r website/* gs://BUCKET_NAME/
   ```

5. Visit your website at `https://storage.googleapis.com/BUCKET_NAME/index.html`
   
   For a custom domain, you'll need to set up Cloud Load Balancing or use a service like Firebase Hosting.
