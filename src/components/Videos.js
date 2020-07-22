import React, {useState, useRef} from 'react'
import FormStyle from '../style/FormStyle'

const Videos = () => {
    const [video, setVideo] = useState({
       title: '',
       paid: '',
       courseId: ''
      });
    
      const {title, paid, courseId} = video;

      const fileRef = useRef();
    
      const onchange = e => {
        setVideo({ [e.target.name]: e.target.value });
      };
    
      const onsubmit = e => {
          e.preventDefault();
      }
    
      return (
        <FormStyle>
          <div className="forms">
            <h1>Video Upload</h1>
            <form onSubmit={onsubmit}>
              <div className="inputForm">
                <label>Title</label>
                <input
                  type="text"
                  required
                  placeholder="Title"
                  value={title}
                  onChange={onchange}
                  name="title"
                />
              </div>
              <div className="inputForm">
                <label>Course Id</label>
                <input
                  type="text"
                  required
                  placeholder="Course Id"
                  value={courseId}
                  onChange={onchange}
                  name="courseId"
                />
              </div>
              <div className="inputForm superForm">
                <label>Paid</label>
                <div className="super">
                  <div className="yes">
                    <input type="radio" 
                    name="paid" 
                    value="paid" 
                    onChange = {onchange}
                    />
                    <label htmlFor="paid" className='yesLabel'>Paid</label>
                  </div>
                  <div className="no">
                    <input type="radio" defaultChecked name="paid" value="free" onChange = {onchange}/>
                    <label htmlFor="No" className='noLabel'>Free</label>
                  </div>
                </div>
              </div>
              <div className = 'inputForm' id = 'uploadForm'>
              <label>Upload</label>
              <input
                type="file"
                style={{ display: "none" }}
                // accept="video/mp4,video/x-m4v,video/*"
                accept = 'video/*,.mkv'
                id='fileInput'
                ref = {fileRef}
              />
              <div className='file'>
              <button className='fileBtn' onClick = {() => fileRef.current.click()}>Choose a file</button>
              <span>No file choosen yet.</span>
              <span className='comment'>* No more than 1gb.</span>
              </div>
              </div>
              
              <input type="submit" className="btn" />
            </form>
          </div>   
        </FormStyle>
    )
}

export default Videos
