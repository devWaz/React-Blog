import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('')

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form>
                <label>Blog Title:</label>
                <input type="text" 
                        value={title} 
                        onChange = {(e) => {setTitle(e.target.value)}} 
                        required/>

                <label>Blog Body:</label>
                <textarea required
                            value={body} 
                            onChange = {(e) => {setBody(e.target.value)}}
                            ></textarea>

                <label>Blog Author:</label>
                <select 
                        value={author}
                        onChange= {(e) => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                    <option value="devWaz">devWaz</option>
                </select>

                <button>Add Blog</button>
            </form>

            <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p>
        </div>
     );
}
 
export default Create;