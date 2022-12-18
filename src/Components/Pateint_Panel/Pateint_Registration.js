import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Sign = () => {
    const nav = useNavigate();
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [pass, setPas] = useState();
    const user = { id, name, email, pass };
  

    const handleClick2 = () => {
        nav('/Patient_Login_Page');
    }
    const handleClick = () => {
        nav('/Home');
    }
    const HandelSubmit = () => {
        if (!id || !name || !email || !pass)
        
        {
            alert('Fill the empty input fields')

        } else {
            // handleClick2();
        }

    }
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "id") {
            setId(value);
        }
        if (id === "name") {
            setName(value);

        }
        if (id === "email") {
            setEmail(value);
            e.preventDefault();
        }
        if (id === "pass") {
            setPas(value);
        }
    }
    const DATA = () => {
        HandelSubmit();

        fetch('http://localhost:3008/Pateint', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(resp => resp.json());
  
  
    }
    return (
        <form className='from-control'>
            <div className='form-control'>
                <h2 className='text-center'> Registration</h2>
                <div className='form-body'>
                    <div className='form-control'>
                        <label> </label>

                        <input className='form-control '

                            type="number"
                            name='id'
                            id='id'
                            placeholder='id'
                            value={id}
                            onChange={(e) => (handleInputChange(e))}

                        />
                        <label> </label>
                        <input className='form-control '
                            placeholder='Name'
                            type="text"
                            name='name'
                            id='name'
                            value={name}
                            required
                            onChange={(e) => (handleInputChange(e))}
                        />
                        <label className='form-label' > </label>
                        <input className='form-control '
                            placeholder='Email'
                            type="email"
                            name='email'
                            id='email'
                            value={email}
                            onChange={(e) => (handleInputChange(e))}
                        />


                        <label className='form-label' > </label>
                        <input className='form-control '
                            placeholder='Pasword'
                            type="password"
                            name='pass'
                            id='pass'
                            value={pass}
                            onChange={(e) => (handleInputChange(e))}
                        />


                    </div>

                </div>

            </div>
            <Card className='form-control' style={{ color: "black", backgroundColor: "ButtonShadow", fontSize: "100%", height: "10%" }} >
                <Card.Body>This is some text within a card body.<br></br>
                    <Button   variant="secondary" style={{ marginTop: "20px" }} type="submit" onClick={DATA} >
                        Submit
                    </Button>
{/* 
                    <Link to="/Login"> */}
                        <Button variant="dark" style={{ marginTop: "20px" }} onClick={handleClick2} >Login </Button>
                        {/* </Link> */}
                </Card.Body>
            </Card>
        </form>

    );
}; export default Sign;