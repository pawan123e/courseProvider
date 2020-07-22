import styled from 'styled-components';

export default styled.div`
width: 100%;
  display: flex;
  margin-bottom: 2rem;
  .forms {
    margin: auto;
    background: white;
    border-radius: 8px;
    margin-top: 5rem;
    h1 {
      text-align: center;
      color: #353535;
      margin: 0;
      padding: 0.5rem 0;
      margin-bottom: 1rem;
    }
    form {
      padding: 1rem 3rem;
      #uploadForm {
          margin-top: 2rem;
          input,.file {
              width: 290px;
              border: none;
              padding: 0;
              .fileBtn {
                  background: green;
                  padding: 0.8rem 1.5rem;
                  margin-right: 1rem;
                  color: white;
                  cursor: pointer;
                  border: none;
                  outline: none;
                  transition: all 0.5s ease;
                  border-radius: 5px;
                  &:hover {
                      opacity: 0.8;
                  }
              }
              span {
                  font-size: 0.9rem;
                  color: gray;
              }
              .comment {
                  display: block;
                  margin-top: 0.5rem;
                  font-size: 0.8rem;
              }
          }
      }
      .inputForm {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        label {
          width: 160px;
        }
        input {
          margin: auto;
          margin: 0;
          padding: 0.8rem 1rem;
          border: none;
          border: 0.5px solid gray;
          outline: none;
          min-width: 290px;
        }
      }
      .des {
        align-self: flex-start;
        justify-self: flex-start;
        textarea {
            width: 290px;
            min-height: 100px;
            padding: 0.8rem;
        }
      }
      .superForm {
        input {
            min-width: auto;
        }
        margin-top: 1rem;
        .super {
            display: flex;
            flex-direction: column;
            .yes, .no {
                .yesLabel, .noLabel {
                    margin-left: 1rem;
                }
            }
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
        margin-left: 160px;
        border-radius: 4px;
        &:hover {
          background: #252525;
        }
      }
    }
  }
`