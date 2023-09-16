import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact Page</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.1181138061247!2d77.23759887559439!3d28.65618187565188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd1d8f2917fb%3A0x1314cdc28742b203!2sM64R%2BF2Q%2C%20Lal%20Qila%2C%20Chandni%20Chowk%2C%20Delhi%2C%20110006!5e0!3m2!1sen!2sin!4v1694886561344!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{border:0}} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>

      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/moqollkn" method="POST" className="contact-inputs">
            <input
              type="text" 
              name="Name" 
              placeholder="username" 
              required 
              autoComplete="off"
            />
            <input 
              type="email" 
              name="Email" 
              placeholder="email"
              required
              autoComplete="off"
            />
            <textarea
              name="Message"
              required
              autoComplete="off"
              placeholder="Enter Your Message" 
              cols="30" 
              rows="10"
            >
            </textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </Wrapper>
  )

};

export default Contact;
