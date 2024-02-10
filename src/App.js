import React, { useState } from 'react';

function TextInputBox() {
  // State to hold the input text
  const [inputText, setInputText] = useState('');
  // State to hold the HTML to be rendered
  const [htmlContent, setHtmlContent] = useState('');

  // Function to update the state with the user's input
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  // Function to update the htmlContent state when the update button is clicked,
  // which in turn updates the HTML content displayed on the page
  const handleUpdateClick = () => {
    setHtmlContent(inputText);
    console.log(inputText); // Optionally log the input text to console
  };

  return (
    <div>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        style={{ width: '100%', height: '200px' }}
        placeholder="Type your HTML here..."
      />
      <button onClick={handleUpdateClick}>Update</button>
      {/* Render the updated HTML content */}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}

export default TextInputBox;
