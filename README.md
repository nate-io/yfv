# YFV Website

This repository contains the landing page for YFV business. The landing page randomly serves either a black or white version of the site when users visit.

## Structure

- `website/` - Contains the website files:
  - `index.html` - Entry point that randomly redirects to either black.html or white.html
  - `black.html` - Dark theme version of the landing page
  - `white.html` - Light theme version of the landing page
  - `favicon.svg` - Favicon for the site

- `logos/` - Contains various logo files used by the business

## Local Development

To test the website locally, you can use Python's built-in HTTP server:

```
cd /path/to/yfv/website
python -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## Deployment to GCS Bucket

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
