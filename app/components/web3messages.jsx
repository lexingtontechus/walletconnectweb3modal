//Messages.tsx
import { useNotifications } from "@web3inbox/react";
import React from "react";

function Messages() {
  const { data: notifications } = useNotifications(3, false);

  return (
    <div>
      <h2 className="">Previous Messages</h2>
      <div className="">
        {!notifications?.length ? (
          <p className="">No messages yet.</p>
        ) : (
          notifications.map(({ id, ...message }) => (
            <div key={id} className="">
              <h3>{message.title}</h3>
              <p>{message.body}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Messages;
