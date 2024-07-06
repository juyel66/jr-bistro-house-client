# JR Bistro House
## Website live link: https://jr-bistro-house-bd.netlify.app/

Welcome to the JR Bistro House website repository. This project is a fully functional restaurant website featuring an integrated payment system and an admin panel for managing various aspects of the site.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Payment System](#payment-system)
6. [Admin Panel](#admin-panel)
7. [Technologies Used](#technologies-used)
8. [Contributing](#contributing)
9. [License](#license)
10. [Contact](#contact)

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

## Usage
Once the application is up and running, you can:

- Browse the menu and view details of each dish.
- Make table reservations online.
- Place orders and pay securely through the integrated payment system.
- Access the admin panel to manage the restaurant's operations.

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

## Contributing
Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.
   

## How to Use the Project After Cloning

After cloning and installing the project, follow these steps:

1. Browse the Menu: View details of each dish along with descriptions and prices.
2. Make Online Reservations: Reserve tables online and check real-time availability.
3. Place Orders: Place orders directly through the website and pay securely through the integrated payment system.
4. Access the Admin Panel: Navigate to the admin panel to manage menu items, orders, reservations, and payments.
## Contact
For any inquiries or feedback, please contact us at info@jrbistrohouse.com.

---

Thank you for visiting the JR Bistro House Restaurant website repository. We hope you have a pleasant experience using our site!
