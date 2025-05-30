import React from 'react'

const Message = () => {
  return (
    <>
     <div className="p-4">
        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-success">
            You have been given a great honor.
          </div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-accent">
            That's never been done in the history of the Jedi.
          </div>
        </div>
      </div> 
    </>
  )
}

export default Message
