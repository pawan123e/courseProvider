import React, {useState, useRef} from 'react'
import FormStyle from '../style/FormStyle'

const Videos = () => {
    const [video, setVideo] = useState({
       title: '',
       paid: '',
       courseId: '',
       courseVideo: ''
      });

    const [fileName, setFileName] = useState('');
    
      const {title, courseId, courseVideo} = video;

      const fileRef = useRef();

      console.log('value of fileref',fileRef.current)
    
      const onchange = e => {
        setVideo({...video, [e.target.name]: e.target.value });
        
      };

      const videoUpload = e => {
        setVideo({ ...video, courseVideo: e.target.files[0] });
        let name = e.target.files[0].name;
        if(name.length > 15) {
            name = name.slice(0,14) + ' ...'
        }
        setFileName(name)
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
                accept = 'video/*,.mkv'
                id='fileInput'
                onChange={videoUpload}
                ref = {fileRef}
              />
              <div className='file'>
              <button className='fileBtn' 
              onClick = {() => fileRef.current.click()}>
                  Choose a file
              </button>
              <span>{fileName ? fileName : 'No file choosen yet.'}</span>
              <span className='comment'>* No more than 2gb.</span>
              </div>
              </div>
              
              <input type="submit" className="btn" />
            </form>
          </div>   
        </FormStyle>
    )
}

export default Videos
