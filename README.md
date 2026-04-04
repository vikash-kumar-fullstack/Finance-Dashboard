# Personal Finance Dashboard

A responsive personal finance tracking application built with React. This project provides a clear visual overview of income, expenses, and current balances to help users track their financial health. 

## Features

* Dashboard Overview: Displays high-level summaries of current balance, total income, and total expenses.
* Data Visualization: Uses custom area and donut charts to show balance trends over time and spending breakdowns by category.
* Automated Insights: Calculates the highest spending categories and provides simple cash flow observations.
* Responsive Layout: Built with a mobile-first approach, featuring a collapsible sidebar and scalable chart containers.

## Tech Stack

* React (Vite)
* Tailwind CSS
* Recharts (for data visualization)

## Running the Project Locally

To run this project on your local machine, follow these steps:

1. Clone the repository:
   git clone https://github.com/vikash-kumar-fullstack/Finance-Dashboard.git

2. Navigate into the project directory:
   cd Finance-Dashboard

3. Install the dependencies:
   npm install

4. Start the development server:
   npm run dev

5. Open your browser and visit http://localhost:5173 to view the application.

## Project Structure

* /src/components - Reusable UI components including charts and layout elements.
* /src/pages - Main application views (Dashboard, Insights, etc.).
* /src/layout - Structural layout components like the Sidebar and Topbar.
* /src/utils - Helper functions for calculating chart data and formatting numbers.
* /src/data - Local mock data used to simulate a backend response.