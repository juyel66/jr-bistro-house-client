# JR Bistro House
## Website live link: https://jr-bistro-house-bd.netlify.app/

Welcome to the JR Bistro House website repository. This project is a fully functional restaurant website featuring an integrated payment system and an admin panel for managing various aspects of the site.

## Project Overview
The JR Bistro House Restaurant website is designed to provide a seamless online experience for customers looking to explore our menu, make reservations, and place orders. The website includes a secure payment system and an admin panel for efficient management of restaurant operations.

## Features
- **Responsive Design**: Optimized for all devices including desktops, tablets, and mobile phones.
- **Menu Display**: An interactive menu showcasing all available dishes with detailed descriptions and prices.
- **Online Reservations**: Customers can reserve tables online with real-time availability.
- **Order Placement**: Users can place orders directly through the website.
- **Payment Integration**: Secure online payment system for hassle-free transactions.
- **Admin Panel**: A robust admin panel for managing menu items, orders, reservations, and payments.

## Installation
To get a local copy up and running, follow these steps:

### Prerequisites
- Node.js
- npm (Node Package Manager)
- MongoDB

### Steps
1. Clone the repository:
    ```sh
    git clone client site https://github.com/juyel66/jr-bistro-house-client
    ```
    ```sh
    git clone server site https://github.com/juyel66/jr-bistro-house-server
    ```
2. Navigate to the project directory:
    ```sh
    cd jr-bistro-house
    ```
3. Install NPM packages:
    ```sh
    npm install
    ```
4. Set up your environment variables. Create a `.env` file in the root directory and add the following:
    ```env
    MONGODB_URI=your_mongodb_connection_string
    SECRET_KEY=your_secret_key
    STRIPE_API_KEY=your_stripe_api_key
    ```
5. Start the application:
    ```sh
    npm start
    ```


## Payment System
The payment system is integrated using Stripe, ensuring secure and efficient transactions. Follow these steps to set up the payment system:

1. Create a Stripe account at [Stripe](https://stripe.com).
2. Obtain your API keys from the Stripe dashboard.
3. Add your Stripe API keys to the `.env` file:
    ```env
    STRIPE_API_KEY=your_stripe_api_key
    ```

## Admin Panel
The admin panel provides an interface for managing various aspects of the restaurant's operations:

- **Menu Management**: Add, update, or remove menu items.
- **Order Management**: View and manage customer orders.
- **Reservation Management**: Approve or decline table reservations.
- **Payment Management**: Monitor and manage payments.

To access the admin panel, navigate to `/admin` after starting the application. You will need to log in with your admin credentials.

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript, React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Payment Integration**: Stripe
- **Authentication**: JWT (JSON Web Tokens)


   
## Contact
For any inquiries or feedback, please contact us at mdjuyelrana.com.bd1@gmail.com

