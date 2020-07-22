import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FormStyle from '../style/FormStyle'

const Course = () => {
  const [course, setCourse] = useState({
    name: "",
    price: "",
    facultyName: '',
    description: '',
    paid: 'free'
  });

  const { name, price, facultyName, description, paid } = course;

  const onchange = e => {
    setCourse({...course, [e.target.name]: e.target.value });
  };

  const onsubmit = e => {
      e.preventDefault();
  }

  console.log('paid value', paid)

  return (
    <FormStyle>
      <div className="forms">
        <h1>Add Course</h1>
        <form onSubmit={onsubmit}>
          <div className="inputForm">
            <label>Course Name</label>
            <input
              type="text"
              required
              placeholder="Course Name"
              value={name}
              onChange={onchange}
              name="name"
            />
          </div>
          <div className="inputForm superForm">
                <label>Paid</label>
                <div className="super">
                  <div className="yes">
                    <input type="radio" 
                    name="paid" 
                    value= 'paid'
                    onChange = {onchange}
                    />
                    <label htmlFor="paid" className='yesLabel'>Paid</label>
                  </div>
                  <div className="no">
                    <input type="radio" name="paid" 
                    value='free'  
                    defaultChecked
                    onChange = {onchange}
                    />
                    <label htmlFor="No" className='noLabel'>Free</label>
                  </div>
                </div>
              </div>
              <div className="inputForm">
            <label>Price</label>
            <input
              type="number"
              required
              placeholder="Price"
              value={price}
              onChange={onchange}
              disabled = {paid === 'free'}
              name="price"
            />
          </div>
          <div className="inputForm">
            <label>Faculties</label>
            <input
              type="text"
              required
              placeholder="Faculties"
              value={facultyName}
              onChange={onchange}
              name="facultyName"
            />
          </div>
          <div className="inputForm des">
            <label>Description</label>
            <textarea value = {description} name = 'description' onChange = {onchange}/>
          </div>
          <input type="submit" className="btn" />
        </form>
      </div>
    </FormStyle>
  );
};

export default Course;

const CourseWrap = styled.div`
  width: 100%;
  display: flex;
  .forms {
    margin: auto;
    background: white;
    border-radius: 8px;
    margin-top: 6rem;
    h1 {
      text-align: center;
      color: #353535;
      margin: 0;
      padding: 0.5rem 0;
      margin-bottom: 1rem;
    }
    form {
      padding: 1rem 4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      .inputForm {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        label {
          min-width: 180px;
        }
        input {
          margin: auto;
          margin: 0;
          padding: 0.8rem;
          border: none;
          border: 0.5px solid gray;
          outline: none;
        }
      }
      .des {
        align-self: flex-start;
        justify-self: flex-start;
        textarea {
            width: 203px;
            min-height: 100px;
            padding: 0.8rem;
        }
      }

      .btn {
        margin-top: 1rem;
        background: #353535;
        color: white;
        padding: 0.8rem;
        font-size: 1.1rem;
        cursor: pointer;
        transition: all 0.5s ease;
        border: none;
        width: 200px;
        margin-left: 180px;
        border-radius: 4px;
        &:hover {
          background: #252525;
        }
      }
    }
  }
`;
