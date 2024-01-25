import React, { Component } from "react";
import axios from "axios";
import Bounce from "react-reveal/Bounce";
export default class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      number: "",
      email: "",
      message: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { name, number, email, message } = this.state;

    try {
      await axios.post(
        "https://api.telegram.org/bot6144324235:AAFrEG4Q2sDdRTbbyLJfrnHTF-YnxOB5P1w/sendMessage",
        {
          chat_id: "1404048265",
          text: `
            Name: ${name}
            Contact Number: ${number}
            Email: ${email}
            Message: ${message}
          `,
        }
      );

      // Clear form fields
      this.setState({ name: "", number: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  render() {
    const { name, number, email, message } = this.state;

    return (
      <Bounce left>
        <footer>
          <section id="contact">
            <h2>Feel free to drop me a message below!</h2>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="number">Contact</label>
                <input
                  type="text"
                  id="number"
                  name="number"
                  value={number}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <button type="submit">Get in touch</button>
            </form>
          </section>
        </footer>
      </Bounce>
    );
  }
}
