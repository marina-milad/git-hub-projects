
import './App.css'
import profile from "../src/assets/image-victor.jpg"
import Numbersdiv from './component/numbersdiv'

function App() {
const arrayofobject =[
  {uniqueid:"1",name:"followers",number:"80k"},
  {uniqueid:"2",name:"likes",number:"803k"},
  {uniqueid:"3",name:"photos",number:"1.4k"}
]
  return (
     <main>
<div id='coloreddiv'></div>
<div id='datadiv'>
  <img  id="photo"  src={profile}  />
  <h2>Victor Crest <span>26</span></h2>
  <label>London</label>
  <hr></hr>
  <div id='largediv'>
    {arrayofobject.map((item) => {
      return(
        <Numbersdiv key={item.uniqueid}
        name ={item.name}
        number ={item.number}
        ></Numbersdiv>
      )
    })}
  </div>
</div>
    </main>
  )
}

export default App
