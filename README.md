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

## API Endpoints

| Method | Endpoint                                 | Description                    | Parameters                 |
| ------ | ---------------------------------------- | ------------------------------ | -------------------------- |
| `POST` | `https://www.pratikzajam.tech/`          | Shortens a provided long URL.  | `url` (body parameter)     |
| `GET`  | `https://www.pratikzajam.tech/:shortUrl` | Redirects to the original URL. | `shortUrl` (URL parameter) |

### Example Usage of Endpoints

1. **Shorten a URL**
   - **Endpoint**: `POST /api/shorten`
   - **Body**:
     ```sh
   {
       "longurl": "https://www.nationalgeographic.com/"
   }
     ```
   - **Response**:
     ```sh
   {
    "statusCode": 200,
    "data": {
        "shorturl": "http://www.pratikzajam.tech/2239f2ae"
    },
    "message": "short url allready exists in the system",
    "success": true
   }
     ```

2. **Expand a URL**
   - **Endpoint**: `GET "http://www.pratikzajam.tech/2239f2ae" `
   - **Response**: 
     ```sh
     {
       "redirects to original url"
     }
    ```

 ### End Points Screenshots

![Get Endpoint](https://github.com/pratikzajam/url_shortner/blob/master/resources/get.png)


![Post Endpoint](https://github.com/pratikzajam/url_shortner/blob/master/resources/post.png)

     
