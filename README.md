# My Portfolio Website

This is a personal portfolio website showcasing my skills, projects, and experience. It's built with React and Vite, designed to be fast, responsive, and easy to maintain.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Data Management](#data-management)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Contact](#contact)
- [Special Thanks](#special-thanks)

## Features

- **Interactive Sections:** Home, About, Skills, Experience, Education, Projects, Testimonials, and Contact.
- **Dynamic Content:** All major content is loaded from JSON files, making updates simple without modifying code.
- **Responsive Design:** Optimized for various screen sizes, from mobile to desktop.
- **Email Integration:** Contact form powered by EmailJS for direct communication.
- **Modern Development Workflow:** Utilizes Vite for a fast development experience and `gh-pages` for easy deployment.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A next-generation frontend tooling that provides an extremely fast development experience.
- **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
- **EmailJS:** A service to send emails directly from your client-side JavaScript without any server-side code.
- **Lucide React:** A collection of open-source, beautifully designed icons.

## Project Structure

The project is organized into logical folders to maintain a clean and scalable codebase:

```
├── public/                 # Static assets
├── src/                    # Source code for the React application
│   ├── data/               # JSON data files    
│   ├── components/         # Reusable React components for each section
│   ├── App.jsx             # Main application component
│   ├── index.css           # Global CSS styles
│   └── main.jsx            # Entry point for the React application
├── .env                    # Environment variables
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

## Data Management

The `src/data` folder is crucial for managing the content of the website. Each JSON file within this folder corresponds to a specific section of the portfolio, allowing for easy content updates without touching the React components.

- `about.json`: Contains information for the "About Me" section.
- `contact.json`: Holds contact details or configurations for the contact section.
- `education.json`: Stores details about educational background.
- `experience.json`: Contains information about professional experience.
- `footer.json`: Data for the website footer.
- `home.json`: Content for the introductory "Home" section.
- `meta.json`: Meta data for the website.
- `navbar.json`: Data for the navigation bar.
- `projects.json`: Details about various projects.
- `skills.json`: A list of skills.
- `testimonials.json`: Testimonials from clients or colleagues.

Additionally, the `public` folder contains:

- `evals/`: Contains evaluation-related files, such as `unadat_evaluation.pdf`.
- `favicon/`: Various favicon sizes and types for different devices and browsers.
- `images/`:
  - `projects/`: Images specific to the projects displayed.
  - `testimonials/`: Images related to testimonials.
  - `profile_img.png`: The main profile image.
- `resume.pdf`: Your resume in PDF format.

## Constants

The `constants.js` file is used to store information and public API keys, ensuring they are easily accessed for modification without touching the code.

```
ICON_MAP= {Briefcase: Briefcase, ...}
SERVICE_ID="emailjs_service_id"
TEMPLATE_ID="emailjs_template_id"
USER_ID="emailjs_public_key"
```

**Important:** 
- Replace the placeholder values with your actual EmailJS credentials. For more information on obtaining these, refer to the [EmailJS documentation](https://www.emailjs.com/docs/).

- To be able to use a bigger selection of Lucide Icons in JSON data files, add them to the `ICON_MAP` in the same format. For more information on what icons are available, refer to the [Lucide Website](https://lucide.dev/)

## Scripts

The `package.json` defines several scripts to streamline development and deployment:

- `predeploy`: This script runs `npm run build` before deployment, ensuring that the latest build is pushed.
- `deploy`: Deploys the built application to GitHub Pages using the `gh-pages` package. It deploys the `dist` folder.
- `dev`: Starts the development server using Vite. This is what you'll use most often during development.
- `build`: Compiles the React application for production into the `dist` directory.
- `lint`: Runs ESLint to check for code quality and style issues.
- `preview`: Serves the `dist` folder locally for a production-like preview.

## Dependencies

These are the core libraries and tools required for the application to run:

- `@emailjs/browser@^4.4.1`: Integrates EmailJS for sending emails from the client-side.
- `lucide-react@^0.511.0`: Provides a set of beautiful, customizable icons.
- `react@^19.1.0`: The JavaScript library for building user interfaces.
- `react-dom@^19.1.0`: Provides DOM-specific methods that can be used at the top level of a web app.

## Development Dependencies

These dependencies are used during the development process and for building the application:

- `@eslint/js@^9.25.0`: ESLint's core JavaScript rules.
- `@tailwindcss/vite@^4.1.8`: Vite plugin for integrating Tailwind CSS.
- `@types/react@^19.1.2`: TypeScript type definitions for React.
- `@types/react-dom@^19.1.2`: TypeScript type definitions for ReactDOM.
- `@vitejs/plugin-react@^4.4.1`: Vite plugin for React refresh and other React-specific features.
- `autoprefixer@^10.4.21`: Parses CSS and adds vendor prefixes to CSS rules.
- `eslint@^9.25.0`: A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
- `eslint-plugin-react-hooks@^5.2.0`: ESLint rules for React Hooks.
- `eslint-plugin-react-refresh@^0.4.19`: ESLint plugin to support React Refresh.
- `gh-pages@^6.3.0`: A tool to publish files to a `gh-pages` branch on GitHub.
- `globals@^16.0.0`: Defines global variables for ESLint.
- `tailwindcss@^4.1.8`: A utility-first CSS framework.
- `vite@^6.3.5`: The next-generation frontend tooling.

## Getting Started

To get a copy of the project up and running on your local machine, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone [your-repository-url]
    cd [your-repository-name]
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Update a `constants.js` file:**
    Create a file named `.constants.js` in the `src/data/` folder of the project and add your EmailJS credentials:

    ```
    SERVICE_ID="emailjs_service_id"
    TEMPLATE_ID="emailjs_template_id"
    USER_ID="emailjs_public_key"
    ```

4.  **Start the development server:**

    ```bash
    npm run dev
    ```

    The application will be accessible at `http://localhost:5173` (or another port if 5173 is in use).

## Deployment

To deploy the website to GitHub Pages:

1.  Ensure you have pushed your changes to the `main` branch of your GitHub repository.

3.  Run the deploy script:
    ```bash
    npm run deploy
    ```
    This will build the application and push the `dist` folder to the `gh-pages` branch of your repository.

4. Navigate to the **GitHub Pages** settings page
    1. In your web browser, navigate to the GitHub repository
    2. Above the code browser, click on the tab labeled "Settings"
    3. In the sidebar, in the "Code and automation" section, click on "Pages"
5. Configure the "Build and deployment" settings like this: 
    1. **Source**: Deploy from a branch
    2. **Branch**: 
        - Branch: `gh-pages`
        - Folder: `/ (root)`
6. Click on the "Save" button

    Your site will then be live at `https://[your-github-username].github.io/`.
    
## Contact

Feel free to reach out via the contact form on the website or connect with me through my social media links provided in the footer.

## Special Thanks

A very special thanks to **Maksim Pikovskiy** for their invaluable contributions and support to this project\!
