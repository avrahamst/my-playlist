export default function NewUser() {
  let testName = "",
    testPassword = "";
  return (
    <div>
      <form>
        {/* <input name="fName" placeholder="First name" />
        <input name="lName" placeholder="Last Name" /> */}
        <input
          name="userName"
          placeholder="User Name"
          onChange={(e) => {
            testName = e.target.value;
          }}
        />
        <input
          password="password"
          placeholder="password"
          onChange={(e) => {
            testPassword = e.target.value;
          }}
        />
      </form>
      <button onClick={() => {}}>Insert</button>
    </div>
  );
}
