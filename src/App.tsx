import './App.css'
import Card from './Card'
export function App() {
  const carditems = [
    {header:"Chapter 1", title:"Objectives", description:"Objectives of the study", buttontext:"View Scope and Delimitation", hastitle: false},
    {header:"Chapter 2", title:"Review of Related Literature", description:"Related Systems", buttontext:"Show More", hastitle: true},
    {header:"Chapter 3", title:"Methodology", description:"Method of Development", buttontext:"See Charts", hastitle: true}
  ]
  return (
    <>
    <h1>Hello World!</h1>
    {carditems.map((item,index)=> (
          <Card
          header={index + ". " + item.header}
          title={item.title}
          description={item.description}
          buttontext={item.buttontext}
          hastitle = {item.hastitle}
          >
          </Card>
        ) 
      )
    }
    </>
  )
}
export default App