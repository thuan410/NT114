

import UserGreeting from "./UserGreeting";
import Student from "./Student";

function App() {
  return(
  <>
  <UserGreeting isLoggedIn = {true} username = "Thuan"/>
  <Student name = "Thuan Tran" age = {30} isStudent={false}></Student>
  <Student name = "Tran Thuan" age = {20} isStudent={true}></Student>
  <Student name = "Thuan"></Student>
  </>
  );
}

export default App
