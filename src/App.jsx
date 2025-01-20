import React, { useState } from 'react';
import InputField from './InputField';
import './App.css';

const App = () => {
  const [question, setQuestion] = useState('');
  const [answerType, setAnswerType] = useState('');
  const [fields, setFields] = useState([{}]); 

  const answerTypes = ['None', 'Text', 'Textarea', 'Number', 'Dropdown', 'Radio', 'Checkbox', 'Slider'];

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const newFields = [...fields];
    newFields[index] = { ...newFields[index], [name]: value }; 
    setFields(newFields);
  };

  const handleAddField = () => {
    setFields([...fields, {}]); 
  };

  const handleRemoveField = (index) => {
    if (fields.length > 1) {
      const newFields = fields.filter((_, i) => i !== index); 
      setFields(newFields);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    console.log({
      question,
      answerType,
      fields,
    });

   
    alert('Form Submitted Successfully!');

  
    setQuestion('');
    setAnswerType('');
    setFields([{}]);
  };

  return (
    <div className="form-container">
      <div className="inner_div">
        <h1>Add Question</h1>

      
        <form onSubmit={handleSubmit}>
       
          <InputField
            label="Question Title"
            name="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />

          {/* Answer Type Dropdown */}
          <div style={{ marginBottom: '10px' }}>
            <label>Answer Type</label>
            <select
              name="answerType"
              value={answerType}
              onChange={(e) => setAnswerType(e.target.value)}
              style={{ marginLeft: '10px', padding: '5px', width: '220px' }}
            >
              <option value="" disabled>
                Select answer type
              </option>
              {answerTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

         
          {answerType && answerType !== 'None' && (
            <>
              {fields.map((_, index) => (
                <div key={index}>
                  {/* First row: Option number */}
                  <div className="option-row">
                    <span>Option {index + 1}</span>
                  </div>

                  {/* Second row: Fields */}
                  <div className="fields-row">
                    <InputField
                      name="placeholder"
                      value={fields[index]?.placeholder || ''}
                      onChange={(e) => handleChange(e, index)} 
                    />
                    <InputField
                      name="min"
                      value={fields[index]?.min || ''}
                      onChange={(e) => handleChange(e, index)}
                      type="number"
                    />
                    <InputField
                      name="max"
                      value={fields[index]?.max || ''}
                      onChange={(e) => handleChange(e, index)}
                      type="number"
                    />
                    {fields.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveField(index)}
                        style={{ padding: '5px', marginLeft: '10px' }}
                      >
                        -
                      </button>
                    )}
                  </div>
                </div>
              ))}

            
              <div style={{ marginTop: '10px' }}>
                <button
                  type="button"
                  onClick={handleAddField}
                  style={{ marginRight: '10px', padding: '5px 10px' }}
                >
                  +
                </button>
              </div>
            </>
          )}

        
          <button type="submit" style={{ marginTop: '20px', padding: '10px' }}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
