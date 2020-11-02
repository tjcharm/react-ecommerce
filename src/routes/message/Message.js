import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../UserContext";
import { sendNewMessage, getMessages } from "../../MessageApi";
export default function Message({ recieverUserId, itemId }) {
  const { authorizedUser } = useContext(UserContext);
  const [messageBody, setmessageBody] = useState(null);

  let submitNewMessage = async () => {
    if (messageBody) {
      sendNewMessage(
        authorizedUser.userId,
        recieverUserId,
        itemId,
        messageBody
      );
    } else {
      console.log("message body is empty.");
    }
  };

  useEffect(() => {
    let initMessages = async () => {
      // THIS FUNCTION IS NOT COMPLETE IN NODE JS YET.
      let messagesFromApi = await getMessages(
        authorizedUser.userId,
        recieverUserId
      );
      console.log(`messages from api -> ${messagesFromApi}`);
    };
    initMessages();
  }, [authorizedUser]);

  let displayedComponent;
  if (authorizedUser && authorizedUser.userId !== recieverUserId) {
    displayedComponent = (
      <div>
        <div>
          <h1>Sender = {authorizedUser.username}</h1>
          <h1>Seller id = {recieverUserId}</h1>
        </div>
        <div>
          <form
            className="flex flex-col bg-gray-350 rounded "
            onSubmit={submitNewMessage}
            method="post"
          >
            <label htmlFor="messageBodyInput">Send new message</label>
            <input
              className="flex flex-col bg-gray-550 m-1 p-1 rounded text-black"
              type="text"
              name="messageBodyInput"
              onChange={(e) => {
                e.preventDefault();
                setmessageBody(e.target.value);
              }}
            />
            <input
              className="flex flex-col bg-gray-500 m-1 p-1 rounded "
              type="submit"
              value="Send"
            />
          </form>
        </div>
      </div>
    );
  } else if (authorizedUser && authorizedUser.userId === recieverUserId) {
    displayedComponent = (
      <div>
        <h1>This is your listing, You can't message yourself :)</h1>
      </div>
    );
  } else {
    displayedComponent = <h1>Please login to send a message</h1>;
  }

  return (
    <div className="h-auto w-11/12 bg-gray-350 rounded m-1 p-1">
      {displayedComponent}
    </div>
  );
}
