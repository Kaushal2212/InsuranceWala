# InsuranceWallah

<h1 align="center">Insurance Website Project</h1>

<p>
  This is a full-stack web application that allows users to explore and purchase insurance policies securely. 
  The platform enables users to compare policies, add them to the cart, manage claims, and complete purchases via an integrated payment gateway.
</p>

<p>
  <b align="center">Features</b><br>
  - Secure login and registration for customers using Spring Security and JWT.<br>
  - Dynamic display of various insurance plans categorized as Health, Life, and Vehicle insurance.<br>
  - Users can add and remove insurance plans from the shopping cart before making a purchase.<br>
  - Side-by-side comparison of policies based on premium costs and benefits.<br>
  - Secure online payment system for purchasing insurance plans.<br>
  - Multiple payment options: Credit Card, Debit Card, Net Banking, etc.<br>
  - Users can submit insurance claims by filling out a form with necessary details.<br>
  - Claim information is stored securely in the database.<br>
  - Claims move through different statuses (Pending, Under Review, Approved) automatically.<br>
</p>

<p>
  <b align="center">Tech Stack</b><br>
  - <b>Frontend:</b> React.js, Bootstrap for UI components.<br>
  - <b>Backend:</b> Spring Boot, RESTful APIs, JWT Authentication.<br>
  - <b>Database:</b> MySQL.<br>
  - <b>Payment Integration:</b> Razorpay/Stripe (or any other payment gateway of choice).<br>
</p>

<p>
  <b align="center">Setup Instructions</b><br>
  - <b>Prerequisites:</b> Node.js and npm installed, Java (JDK 11 or above) installed, MySQL installed and running.<br>
  - Clone the repository: <code>git clone https://github.com/yourusername/insurance-website.git</code><br>
  - Navigate to the backend directory: <code>cd insurance-website/backend</code><br>
  - Configure the database in <code>application.properties</code>.<br>
  - Build and run the Spring Boot application: <code>mvn spring-boot:run</code><br>
  - Navigate to the frontend directory: <code>cd insurance-website/frontend</code><br>
  - Install dependencies: <code>npm install</code><br>
  - Start the development server: <code>npm start</code><br>
</p>

<p>
  <b align="center">Backend API Endpoints</b><br>
  - <b>/auth/register</b> (POST) - Register a new user.<br>
  - <b>/auth/login</b> (POST) - User login.<br>
  - <b>/policies</b> (GET) - Get all insurance policies.<br>
  - <b>/cart/add/{policyId}</b> (POST) - Add policy to cart.<br>
  - <b>/cart/remove/{policyId}</b> (DELETE) - Remove policy from cart.<br>
  - <b>/claims/submit</b> (POST) - Submit a claim.<br>
  - <b>/claims/status/{claimId}</b> (GET) - Check claim status.<br>
  - <b>/payment/process</b> (POST) - Process payment.<br>
</p>

<p>
  <b align="center">Frontend UI</b><br>
  - Home Page: Displays available insurance plans.<br>
  - Login/Register Page: User authentication.<br>
  - Policy Details Page: View detailed policy information.<br>
  - Cart Page: Manage added insurance plans.<br>
  - Claim Submission Page: Submit and track claims.<br>
</p>

<p>
  <b align="center">Development Workflow</b><br>
  - <b>Frontend Development:</b> Built using Bootstrap for responsiveness, developed claim forms with validation, integrated React components with backend APIs.<br>
  - <b>Backend Development:</b> Implemented RESTful APIs using Spring Boot, handled claim management and policy purchases, integrated secure authentication using JWT.<br>
</p>

<p>
  <b align="center">Copyright</b><br>
  @2025 Kaushal B. Kadam<br>
</p>
