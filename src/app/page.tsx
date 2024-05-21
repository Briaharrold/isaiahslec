"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import InputComponent from "./Components/InputComponents";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/Context";


export default function Home() {
//const [blur,setBlur ]= useState(false);

// const handleClick=() =>{
// if(blur)
//   {
//     setBlur(false);
//   }else{
//     setBlur(true);
//   }
// }


const [form, setForm] = useState({name:"", favoriteFood:""});
const isFilled = form.name != "" && form.favoriteFood != "";
const [submit, setSubmit] = useState(false);
const [name, setName]=useState<string>("jermey");
const data = useAppContext();
useEffect (() => {
data.setPageTwoName(name);
},[])
const router = useRouter();

const updateForm =(e:React.ChangeEvent<HTMLInputElement>) =>{
  setForm({...form,[e.target.name]:e.target.value})
}

const handlePageChange = () =>{
router.push('/PageTwo');

}
const handleForm = ()=> {
isFilled ? setSubmit(true) : setForm({name:"" , favoriteFood:""});
}

<p></p>
  const changeTextFunc = (text: string) => {
    setChangeText(text);
  };
  const [changeText, setChangeText] = useState("");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <input type="text" className="text-black" onChange={(e) => setChangeText(e.target.value)} />
      <InputComponent  changeText={changeTextFunc} />
      <p>
        Password must contain
        <span  style={{ color: /[A-Z]/.test(changeText) ? "blue" : "red" }}>
          {" "}
          Uppercase,{" "}
        </span>
        <span style={{ color: /[0-9]/.test(changeText) ? "blue" : "red" }}>
          Number
        </span>
      </p> */}
       <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form className={submit ? "hidden" : ""}>
        <h1 className="text-center text-lg">Favorite Food Form</h1>
        <div className="bg-white shadow-md rounded p=8">

        <div className="mb-4">
          <label htmlFor="" className="border rounded p-3">
            Name
          </label>
          <input type="text" placeholder="Name"  className="border rounder p-3 text-black" onChange={updateForm} name="name"  value={form.name} />
        </div>

        <div className="mb-4">
          <label htmlFor="" className="border rounded p-3">
            Favorite Food
          </label>
          <input type="text" className="border rounded p-3 text-black" placeholder="Favorite Food" name="favoriteFood" onChange={updateForm} value={form.favoriteFood}  />
        </div>

        <button className={`text-white py-2 px-4 rounded ${isFilled ? 'bg-green-500 hover:bg-green-700' : 'bg-red-500 hover:bg-red-700'}`} type="button" onClick={handleForm}>
         {isFilled ? "Submit" : "Fill Out"}
        </button>

        </div>
      </form>
<p>{name}</p>
      <p className={submit? "": "hidden"} >Thank you for your Submission!</p>
    </main>
   
      <button className="bg-white text-black rounded-lg"  onClick={handlePageChange}>Change Page</button>
    </main>
  );
}
