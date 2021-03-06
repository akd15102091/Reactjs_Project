import React,{useState} from "react"

function Contact() {
    const [data,setData] = useState({
        fullname:"",
        phone:"",
        email:"",
        msg:"",
    }) ;

    const formSubmit = (e) =>{
       // e.preventDefault() ;
        alert(`My name is ${data.fullname}. My phone number is ${data.phone}. My mail id is ${data.email}. Message is ${data.msg}`)
    }
    const InputEvent = (event) => {
        const {name,value} = event.target ;

        setData((preval) => {
            return {
                ...preval,
                [name]:value,
            }
        })
    }

  return (
    <React.Fragment>
      <div className="my-s">
            <h1 className="text-center"> Contact Us</h1>
      </div>

      <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>

                        <div class="form-group">
                        <label for="exampleFormControlInput1">FullName</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter your name" />
                        </div>

                        <div class="form-group">
                        <label for="exampleFormControlInput1">Phone</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="mobile number"/>
                        </div>

                        <div class="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com"/>
                        </div>

                        <div class="form-group">
                        <label for="exampleFormControlTextarea1">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent} ></textarea>
                        </div>
                        <br></br>
                        <div class="col-12">
                            <button class="btn btn-outline-primary" type="submit">
                                Submit Form
                            </button>
                        </div>
                
                    </form>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>
      </div>
    </React.Fragment>
  );
}

export default Contact;
