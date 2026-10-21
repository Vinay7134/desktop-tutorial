# Supper Club

A neighborhood food-delivery ordering experience built with React and Vite, set in Khammam, Telangana.

## Run locally

```sh
npm install
npm run dev
```

Vite prints the local URL after the development server starts.

## Features

- Search dishes and restaurants, filter by cuisine, and sort by rating or price.
- Choose a delivery area in Telangana or nearby Andhra Pradesh.
- Add dishes to the bag, change quantities, and review subtotal, delivery fee, and total in INR.
- Complete the sample checkout flow and see an order confirmation.
- Responsive desktop and mobile layouts.

## Checks

```sh
npm run build
npm run lint
```

## GitHub Pages

The repository includes a GitHub Actions workflow that builds and deploys the site when changes are pushed to `main`. In the repository settings, set Pages' build and deployment source to **GitHub Actions**. GitHub will show the published URL in the workflow deployment environment.

Checkout is a front-end demo and does not submit a real order or process payment. Food photography loads from Unsplash and requires an internet connection.
