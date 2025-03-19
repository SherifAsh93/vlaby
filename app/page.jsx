"use client"
export default function Home() {
  function onClick(){
    event.preventDefault()
    const name = document.getElementById("nameinput").value
    const email = document.getElementById("emailinput").value
    const phone = document.getElementById("phoneinput").value
    alert(`Welcome ${name}`)
    alert(`We will contant your Registered email: ${email}`)
    alert(`We will contant your Registered phone: ${phone}`)
  }

  return (
    <div className="flex flex-col gap-5 items-center h-screen bg-cyan-50 ">
      <h1 className="pt-2 text-5xl">Welcome in Vlaby</h1>
      <h2>Register to create your Virtual Lab</h2>
      <form onSubmit={onClick} className="flex flex-col gap-3 rounded-md border-2 p-3 border-gray-400">
      <input
        type="text"
        id="nameinput"
        placeholder="Your Name"
        className="border border-gray-300 rounded-md p-2"
      />
      <input
        type="email"
        id="emailinput"
        placeholder="Your Email"
        className="border border-gray-300 rounded-md p-2"
      />
        <input
        type="number"
        id="phoneinput"
        placeholder="Your Phone"
        className="border border-gray-300 rounded-md p-2"
      />
      <button type="submit" id="submitbutton" className="bg-sky-700 text-white rounded-2xl p-1">Register</button>
      </form>
    </div>
  );
}
