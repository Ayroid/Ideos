const templates = {
  REGISTRATION: {
    subject: "Ideos - Registration Successful",
    html: `
    <html>
  <head>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
    />
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #1e1e1e;
        margin: 0;
        padding: 0;
        font-size: 16px;
      }
      .container {
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
        padding-bottom: 2rem;
        background-color: #000;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      h1,
      h2,
      h3,
      span {
        color: #baff4c;
      }
      div {
        line-height: 1.3;
        color: #ffffff;
      }
      .socials {
        margin-top: 20px;
        display: flex;
        justify-content: center;
      }
      svg {
        margin: 0 5px;
        height: 30px;
      }
      hr {
        margin-top: 1.5rem;
        margin-bottom: 1rem;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Welcome to Ideos!</h1>
      <h2>Registration Successful</h2>
      <div>
        Hi username,
        <br />
        <br />
        Welcome aboard the Ideos journey! You're now part of a community that's dedicated to enhancing productivity and simplifying your workflow.
        <br /><br />
        Whether you're managing tasks, collaborating with teams, or organizing your projects, Ideos is here to empower you every step of the way.
        <br /><br />
        Need assistance with setting up your workspace or exploring our features? Don't hesitate to reach out to our support team. We're here to ensure you make the most out of your Ideos experience!
        <br /><br />
        Thanks, and Regards
        <br />
        <br />
        Team <span>Ideos</span>
      </div>
    </div>
  </body>
</html>

    `,
  },

  LOGIN: {
    subject: "Ideos - Login Successful",
    html: `
    <html>
    <head>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
      />
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #1e1e1e;
          margin: 0;
          padding: 0;
          font-size: 16px;
        }
        .container {
          max-width: 400px;
          margin: 0 auto;
          padding: 20px;
          padding-bottom: 2rem;
          background-color: #000;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1,
        h2,
        h3,
        span {
          color: #baff4c;
        }
        div {
          line-height: 1.3;
          color: #ffffff;
        }
        .socials {
          margin-top: 20px;
          display: flex;
          justify-content: center;
        }
        svg {
          margin: 0 5px;
          height: 30px;
        }
        hr {
          margin-top: 1.5rem;
          margin-bottom: 1rem;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Welcome back to Ideos!</h1>
        <h2>Login Successful</h2>
        <div>
          Hi username,
          <br />
          <br />
          We're thrilled to confirm that you've successfully logged into your Ideos account. You're now ready to dive back into your projects, tasks, and collaborations with ease.
          <br /><br />
          Whether you're catching up on your to-do list, collaborating with teammates, or organizing your schedule, Ideos is here to support your productivity goals every step of the way.
          <br /><br />
          If you have any questions, need assistance, or simply want to explore more features, feel free to contact our support team. We're always here to help!
          <br /><br />
          Thanks for choosing Ideos!
          <br />
          <br />
          Regards,
          <br />
          Team <span>Ideos</span>
        </div>
      </div>
    </body>
  </html>
  
    `,
  },
};

export { templates as MAILTEMPLATES };
