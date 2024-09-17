import "../CssFiles/Animations.css"

export function HomePage() {

  return <>
      <div className="blur-background h-auto min-vh-100">
        <p className="text-white content lh-lg">
          <h1>
            Welcome to Our Shopping Cart Application!
          </h1>
        <br />
            We are excited to introduce you to our advanced shopping cart application, designed to provide a seamless and enjoyable shopping experience. Our application is built with modern React.js practices, ensuring a robust and efficient platform for all your shopping needs.

            Our Mission
            Our mission is to create a user-friendly, responsive shopping cart solution that simplifies the online shopping process. Whether you're a casual shopper or a dedicated enthusiast, we aim to make your experience as smooth and enjoyable as possible.

            Key Features
            Custom Hook for LocalStorage: Our custom hook ensures that your cart items are saved and retrieved seamlessly, so you can pick up right where you left off.
            Context API for State Management: We use React's Context API to manage cart data globally, making it easy to add, remove, and view items across the application.
            Responsive Design: The application is fully responsive, thanks to Bootstrap and custom CSS, ensuring it looks great on all devices—from desktops to smartphones.
            Modern React Practices: Leveraging functional components and hooks, our application is built with the latest React.js practices for optimal performance and maintainability.
            Technology Stack
            React.js: A powerful JavaScript library for building user interfaces.
            Bootstrap: A popular CSS framework for responsive design.
            Custom CSS: Tailored styles to give the application a unique and personalized look.
            LocalStorage: For persistent cart data across sessions.
            Context API: For global state management and seamless data handling.
            Our Team
            Our team is a group of passionate developers dedicated to crafting high-quality web applications. We strive to stay on top of the latest technologies and best practices to deliver exceptional products. Meet the team behind the project:

            [Your Name]: Lead Developer and Project Manager
            [Team Member 1]: UI/UX Designer
            [Team Member 2]: Backend Developer
            [Team Member 3]: Frontend Developer
            Contact Us
            We’d love to hear from you! Whether you have feedback, questions, or just want to say hello, feel free to reach out to us:

            Email: [your-email@example.com]
            Twitter: [@yourtwitterhandle]
            GitHub: [github.com/your-username]
            Future Plans
            We are constantly working to enhance the application with new features and improvements. Stay tuned for future updates that will include:

            Enhanced user interface and user experience improvements.
            New features based on user feedback.
            Integration with additional payment gateways.
            Thank you for visiting our Home page. We hope you enjoy using our shopping cart application as much as we enjoyed building it!
        </p>
      </div>
  </>
}
