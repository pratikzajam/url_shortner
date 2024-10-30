# URL Shortener Web Application

## Project Description

This URL shortener web application allows users to shorten long URLs into shorter, more manageable links. Users can also expand shortened URLs back to their original form. The application provides a simple and efficient way to manage and share URLs.

## Features

- Shorten long URLs
- Expand shortened URLs
- Track the number of times a shortened URL has been accessed
- User-friendly interface

## Installation

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

### Steps

1. Clone the repository:
   ```sh
   git clone https://github.com/pratikzajam/url_shortner.git
   cd url-shortener
   ```

2. Install Dependencies: Use npm to install all required dependencies:
   ```sh
   npm install
   ```

3. Configure Environment Variables: Create a .env file in the root directory and add 
   the following configurations     
   ```sh
   PORT=8000
   MONGODB_URI=your_mongodb_connection_string
   ```
4. Run the Application: Start the server by running:  
   ```sh
   npm start
   ```
   
5. Access the Web Application: Open a web browser and go to http://localhost:8000 to use the
   URL shortener.

 ### usage

 ## API Endpoints

| Method | Endpoint           | Description                          | Parameters                  |
|--------|---------------------|--------------------------------------|-----------------------------|
| `POST` | `/api/shorten`     | Shortens a provided long URL.        | `url` (body parameter)      |
| `GET`  | `/:shortUrl`       | Redirects to the original URL.       | `shortUrl` (URL parameter)  |
| `GET`  | `/api/expand`      | Expands a shortened URL back to its original form. | `shortUrl` (query parameter) |
| `GET`  | `/api/stats/:id`   | Retrieves access count and stats for a specific URL. | `id` (URL parameter)        |

### Example Usage of Endpoints

1. **Shorten a URL**
   - **Endpoint**: `POST /api/shorten`
   - **Body**: 
     ```json
     {
       "url": "https://example.com/long-url"
     }
     ```
   - **Response**: 
     ```json
     {
       "shortUrl": "http://localhost:3000/abc123"
     }
     ```

2. **Expand a URL**
   - **Endpoint**: `GET /api/expand?shortUrl=abc123`
   - **Response**: 
     ```json
     {
       "url": "https://example.com/long-url"
     }
     ```

3. **Redirect to Original URL**
   - **Endpoint**: `GET /abc123`
   - **Description**: When this endpoint is visited, it redirects the user to the original URL.

4. **Get Access Count and Stats**
   - **Endpoint**: `GET /api/stats/:id`
   - **Response**: 
     ```json
     {
       "id": "abc123",
       "originalUrl": "https://example.com/long-url",
       "accessCount": 150
     }
     ```








