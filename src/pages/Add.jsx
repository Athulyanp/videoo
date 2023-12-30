import React from 'react'
import { PlusCircle } from 'feather-icons-react/build/IconComponents';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { FloatingLabel } from 'react-bootstrap';
import { addVideo } from '../services/allapi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Add({handleResponse}) {

    const [show, setShow] = useState(false);
    //  model creation  in angular is  like  as state creation in react for value getting in textbox.
    const [uploadData, setuploadData] = useState({
        id: "", caption: "", thumbnail: "", url: ""
    })
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);






    const setInput = (e) => {

        // console.log(e.target.value);
        const { name, value } = e.target
        setuploadData({ ...uploadData, [name]: value })


    }
    //  console.log(uploadData);

    const extractUrl = (e) => {

        let youtubeUrl = e.target.value


        if (youtubeUrl.includes("v=")) {
            let index = youtubeUrl.indexOf("v=")
            console.log(index);

            let videoUrl = youtubeUrl.substring(index + 2, index + 13)
            console.log(videoUrl);

            let videodata = uploadData
            videodata.url = `https://www.youtube.com/embed/${videoUrl}`
            setuploadData(videodata)

        }

        console.log(uploadData);

    }

    const handleAdd = async () => {
        const { id, caption, thumbnail, url } = uploadData
        if (!id || !caption || !thumbnail || !url) {
            toast("please fill the form completly")
        }
        else {
            //make an api call to allapi.js
            const response = await addVideo(uploadData)

            if (response.status >= 200 && response.status < 300) {
                // console.log(response.data);
                handleResponse(response.data)

                setShow(false)
                toast.success("new video uploaded successfully", {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                })
            }
            else {
                toast("please provide a unique id!!!")
            }

        }

    }




    return (
        <>
            <div onClick={handleShow} className='btn'>
                <PlusCircle color='green' size={80} />
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Upload Video Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form>
                        <FloatingLabel className='mb-3' controlId="floatingId" label="Uploading Video Id">
                            <Form.Control type="text" placeholder="Video Id" name='id' onChange={setInput} />
                        </FloatingLabel>

                        <FloatingLabel className='mb-3' controlId="floatingCaption" label="Uploading Video Caption ">
                            <Form.Control type="text" placeholder="Video Caption" name='caption' onChange={setInput} />
                        </FloatingLabel>

                        <FloatingLabel className='mb-3' controlId="floatingImage" label="Uploading Video Cover Image Url ">
                            <Form.Control type="text" placeholder="VideoId" name='thumbnail' onChange={setInput} />
                        </FloatingLabel>

                        <FloatingLabel className='mb-3' controlId="floatingImage" label="Uploading Video Link">
                            <Form.Control type="text" placeholder="Video Link" name='url' onChange={extractUrl} />
                        </FloatingLabel>



                    </Form>





                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleAdd} variant="primary">Add</Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer

                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"


            />
        </>
    )
}

export default Add

