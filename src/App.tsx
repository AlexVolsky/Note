import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch} from 'react-redux';
import {Note} from  './reducer/noteReducer'
//import { notesAll } from './noteItems';




function App() {
  const array  = useSelector(
    (store:  {note: Note[]} ) => store.note,
  );
  const dispatch = useDispatch();

  console.log(array);

    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);





/*   const AddUsers = ({users, setUsers}: {users: IUser[], setUsers?: React.Dispatch<IUser[]>}) => {
    const initialUserCard = {
        id:  '',
        name: '',
        username: '',
        email: '',
        address: '',
        phone: '',
        website: '',
        company: ''
    } */
   /*  const [userCard, setUserCard] = useState<any>(initialUserCard);
    const dispatch = useDispatch();
    const postUser = bindActionCreators(postNewUser, dispatch); */

    
    
/*     const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const field: string = event.target.id;
        setUserCard({...userCard,[field]: event.target.value})
        console.log(userCard)

        } */


    


   /*      
        const addNote = (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            postUser(userCard);
            setUserCard(initialUserCard);
    } 


    
   
};*/








  
  return (
    <div className="App">
            




      <Button variant="primary" onClick={handleShow}>
        создать заметку
       </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>новая заметка</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>title</Form.Label>
              <Form.Control
                type="text"
                placeholder="title"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>content</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
            dispatch({type:'NewNote', payload: {title: "sasd", content: "sdfsfsdfds fsd sdf sfd"}})
          }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="noteContainer">
          <div className="noteBlock">{/* {notes.map(note => (<><span>{note.title}</span></>))} */}</div>
          <div className="noteBlock">

            {/* {notesAll.map(item => alert(item.))} */}
            {/* {notes.map(note => (<><span>{note.title}</span></>))} */}
            {/* {notesAll.map(item => */

            <>
                <div className="col" key={/* user.id */ Math.floor(Math.random()*1000)}>
                    <div className="card h-100">
                        <div className="card-body">
                          {/*  {<Link to={`/user/${user.id}`}>
                                <h5 className="card-title">{ 'name: ' +  user.name}</h5>
                            </Link>} */}
                            
                          {/*  <p className="card-text">{'username: ' + item.title}</p>
                            <p className="card-text">{'email: ' + item.content}</p> */}
                            <p className="card-text">'username: '</p>
                        </div>
                        <div className="card-footer">
                        <Button variant="primary" > УДАЛИТЬ ЗАМЕТКУ</Button>
                        </div>
                    </div>
                </div>
               
                   <div>
                    {array && array.map((note: Note)=> {return (<p>{`${note.title} ${note.content}`}</p>)})}
                    
                    </div>                 
            </>
                   



                    

                    
                /* )} */}
            </div>
      </div>
      

    </div>
  );
}

export default App;
