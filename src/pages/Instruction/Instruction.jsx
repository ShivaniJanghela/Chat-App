import {  Link } from 'react-router-dom';
import "./Instruction.css";

const Instruction =()=>{
    
    return(
        <div className='outerdiv' >
            <div className="innerdiv">
             ● Chitchat is a chat application with login and register pages where you can register multiple users to create account and login using email and password.
             <br/>
             <br/>

             ● You can send text messages and can also share images with other user.
             <br/>
             <br/>

             ● To enable chat with other user simply search the name of the user in search box and click on the name when it appears.
             <br/>
             <br/>

             ● You can also use dummy logins of already existing users.
 <table>
  <tr>
    <th>Email Id's</th>
    <th>Password</th>
  </tr>
  <tr>
    <td>rahul@gmail.com</td>
    <td>rahul123</td>
  </tr>
  <tr>
    <td>anjali@gmail.com</td>
    <td>anjali123</td>
  </tr>
  <tr>
    <td>tina@gmail.com</td>
    <td>tina123</td>
  </tr>
  <tr>
    <td>aman@gmail.com</td>
    <td>aman123</td>
  </tr>
  
</table>
             <br/>
             <br/>
             <Link to="/login" style={{textDecoration:"none"}}><button className='instbtn'>Back</button></Link>

            </div>
        </div>
    )
}
export default Instruction