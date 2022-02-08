import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const Signup = () => {
  return (
      <>
      <Navbar></Navbar>
      <Title>Register your Startup with us !</Title>
      <Container>
          <Wrapper>
              <Form>
                <LeftForm>
                    <Label htmlFor="startupName">Name of the Startup : </Label>
                    <Input type="text" placeholder="Name of the Startup" name="startupName"></Input>
                    <Label htmlFor="tagline">Name of the Startup : </Label>
                    <TextArea placeholder="A short tagline/purpose of the Startup" name="tagline"></TextArea>
                    <Label htmlFor="hqLocation">Location of Headquarters : </Label>
                    <Input type="text" placeholder="Location of the Headquarters" name="hqLocation"></Input>
                    <Label htmlFor="hqLocation">Location of Headquarters : </Label>
                    <Input type="text" placeholder="Location of the Headquarters" name="hqLocation"></Input>
                    <Label htmlFor="description">Description : </Label>
                    <TextArea placeholder="Description about the Startup" name="description"></TextArea>
                    <Label htmlFor="category">Category : </Label>
                    <Select name="category">
                        <Option>EdTech</Option>
                        <Option>E-Commerce</Option>
                        <Option>FinTech</Option>
                    </Select>
                </LeftForm>
                <Center></Center>
                <RightForm>
                    <Label htmlFor="founderName">Name of the Founder : </Label>
                    <Input type="text" placeholder="Name of the Founder" name="founderName"></Input>
                    <Label htmlFor="foundedDate">Date of the Founding : </Label>
                    <Input type="date" placeholder="Date of Founding" name="foundedDate"></Input>
                    <Label htmlFor="website">Startup Website : </Label>
                    <Input type="text" placeholder="Startup Website" name="website"></Input>
                    <Label htmlFor="founderName">Name of the Founder : </Label>
                    <Input type="text" placeholder="Name of the Founder" name="founderName"></Input>
                    <Label htmlFor="email">Email ID : </Label>
                    <Input type="email" placeholder="Email" name="email"></Input>
                    <Label htmlFor="phoneNumber">Name of the Founder : </Label>
                    <Input type="number" placeholder="Name of the Founder" name="founderName"></Input>
                </RightForm>
              </Form>
              <Button>Register</Button>
          </Wrapper>
      </Container>
      </>
  );
};

const Title = styled.div`
    margin-top: 20px;
    margin-bottom: 0px;
    font-size: 40px;
    height: 80px;
    text-align: center;
    color: black;
    background-color: white;
    border-bottom: 6px solid #4dd9fd;
`

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: white;
    display: flex;
    justify-content: center;
    margin-top: 20px;
`

const Wrapper = styled.div`
    width: 80%;
    height: 90vh;
    background: rgb(0,0,15);
background: linear-gradient(90deg, rgba(0,0,15,0.9152834602956021) 10%, rgba(0,0,0,0.6961823367000965) 98%);
    border: solid 1px black;
    border: 0.04rem solid rgba(255,255,255,0.2);
    box-shadow: -2px -2px 5px 5px rgba(0,0,0,0.2);
    border-radius: 5px;
    align-items: center;
    overflow: scroll;
`



const Form = styled.div`
    color: white;
    display: flex;
    align-items: center;
`

const LeftForm = styled.form`
    margin-top: 40px;
    margin-left: 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Label = styled.label`
    font-size: 14px;
`

const Input = styled.input`
    height: 30px;
    width: 80%;
    margin-bottom: 20px;
    border: 0.5px solid rgba(0,0,0,0.2);
    border-radius: 5px; 
`

const TextArea = styled.textarea`
    width: 80%;
    margin-bottom: 20px;
    border: 0.5px solid rgba(0,0,0,0.2);
    border-radius: 5px; 
`

const Select = styled.select`
    width: 70%;
`

const Option = styled.option`
`

const Center = styled.div`
    align-items: center;
    height: 69vh;
    border: 0.5px solid rgba(0, 0, 0, 0.2);
`

const RightForm = styled.form`
    margin-left: 20px;
    margin-top: 40px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Button = styled.button`
    height: 50px;
    border-radius: 5px;
    font-size: 20px;
    width: 30%;
    margin-left: 35%;
    margin-top: 30px;
    border: none;
    color: white;
    text-transform: uppercase;
    background: linear-gradient(to right, #314755 0%, #26a0da  51%, #314755  100%)
    transition: all 0.5s ease;
    cursor: pointer;
    &:hover{
        background-color: #4dd9fd;
    }
`
//background-position: right center;

//          .btn-grad {background-image: linear-gradient(to right, #314755 0%, #26a0da  51%, #314755  100%)}
//          .btn-grad {
//             margin: 10px;
//             padding: 15px 45px;
//             text-align: center;
//             text-transform: uppercase;
//             transition: 0.5s;
//             background-size: 200% auto;
//             color: white;            
//             box-shadow: 0 0 20px #eee;
//             border-radius: 10px;
//             display: block;
//           }

//           .btn-grad:hover {
//             background-position: right center; /* change the direction of the change here */
//             color: #fff;
//             text-decoration: none;
//           }
         

export default Signup;
