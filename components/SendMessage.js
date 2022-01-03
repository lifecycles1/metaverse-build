import { useState } from "react";
import { useMoralis } from "react-moralis";

function SendMessage({ endOfMessagesRef }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message) return;

    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {
          //A promise comes back and you can do something with it to indicate that The object was saved Successfully.
        },
        (error) => {
          //if The save failed. console.log it
          //error is a Moralis.Error with an error code and message.
          console.log(error.message);
        }
      );
    //this will point to div tag with the "endofmessagesref" reference attached to it
    //i will stick that div to the bottom of the messages component
    // and scrollIntoView will scroll down to the reference with a smooth behaviour
    endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    //this reclears the input field
    setMessage("");
  };

  return (
    <form
      className="flex fixed bottom-10 bg-black opacity-80 w-11/12 px-6 py-4 
    max-w-2xl shadow-xl rounded-full border-4 border-blue-400"
    >
      <input
        className="flex-grow outline-none bg-transparent placeholder-gray-500 pr-5 text-white"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={`Enter your Message ${user.getUsername()}...`}
      />
      <button
        type="submit"
        onClick={sendMessage}
        className="font-bold text-pink-500"
      >
        Send
      </button>
    </form>
  );
}

export default SendMessage;
