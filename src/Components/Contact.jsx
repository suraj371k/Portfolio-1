import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";




const Contact = () =>{

    const [result , setResult] = useState("")

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "b751a0b6-d82a-4312-88a1-0c7332e1e2be");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };

    return(
        <div id="contact" className="mt-24 flex text-white justify-around bg-[#1b263b]">
            <div className="p-5">
                <div>
                    <h3 className="text-3xl  font-semibold">Contact me</h3>
                <p className="text-xl mt-8">Mobile no: <a href="tel:+ 6307624976">6307624976</a></p>
                <p className="text-xl ">Email: <a href="mailto: surajkushwaha371@gmail.com">
                    surajkushwaha371@gmail.com</a></p>
                </div>
                <div className="py-7">
                 <h3 className="text-3xl font-semibold">Social Media</h3>
                 <div className="flex gap-6 mt-8">

                 <a href="https://www.linkedin.com/in/suraj-kushwaha-a696a8258/">
                 <FaLinkedin className="text-4xl"/></a>
               <a href="https://github.com/suraj371k/"><FaGithub className="text-4xl"/></a>
                 </div>
                </div>
            </div>
           <form onSubmit={onSubmit} className="flex flex-col items-center gap-3">
                <div>
                    <label className="text-xl font-semibold">Name</label><br/>
                    <input type="text" 
                    className="px-10 w-[300px] py-3 text-black rounded-xl border-2 text-xl"
                    placeholder="Enter your name" required/>
                </div>
                <div>
                    <label className="text-xl font-semibold">Email</label><br/>
                    <input type="email" 
                     className="px-10 text-black w-[300px] py-3 rounded-xl border-2 text-xl"
                     placeholder="Enter Your Email" required/>
                </div>
                <div>
                    <label className="text-xl font-semibold">Message</label><br/>
                    <textarea className="rounded-xl text-black text-xl" rows='5' cols='40'></textarea>
                </div>
                <div>
                    <button className="px-8 py-3 rounded-full bg-black text-white">Submit</button>
                </div>
                <span>{result}</span>

                </form>
        </div>
    )
}

export default Contact