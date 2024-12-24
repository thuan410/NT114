
import Student from "./Student";

function App() {
  return(
  <>
  <Student name = "Thuan Tran" age = {30} isStudent={false}></Student>
  <Student name = "Tran Thuan" age = {20} isStudent={true}></Student>
  <Student name = "Thuan"></Student>
  </>
  );
}

export default App
