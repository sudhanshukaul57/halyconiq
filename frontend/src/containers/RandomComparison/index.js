import { useState } from 'react'
import './style.css';
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage} from 'react-icons/ai'

function RandomComparison(){

    const [image, setImage] = useState(null)
    const [fileName, setFileName] = useState("No Selected file")
    return (
        <div className="body" >
        {
            <main >
            <form
            onClick={ () => document.querySelector(".input-field").click()}>
                <input type="file" className='input-field' hidden
                onChange={({target: {files}}) => {
                    files[0] && setFileName(files[0].name)
                    if(files){
                        setImage(URL.createObjectURL(files[0]))
                    }
                }}/>
            {image? <>
                <MdCloudUpload color= '#1475cf' size={60}/>
                <p style={{"color":"white"}}>File selected</p>
            </>
            : <>
                <MdCloudUpload color= '#1475cf' size={60}/>
                <p style={{"color":"white"}}>Browse Files to upload</p>
            </>
            }
            </form>
            <section className='uploaded-row'>
                <AiFillFileImage color='#1475cf'/>
                <span className='upload-content'>
                    {fileName} - 
                    <MdDelete
                        onClick={() => {
                            setFileName("No Selected File")
                            setImage(null)
                        }}
                    />
                </span>
            </section>
            <button type="submit" className='upload-button' >Proceed</button>
        </main>
        }
        </div>
    )
}

export default RandomComparison