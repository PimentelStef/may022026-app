import './App.css'
import Card from './Card'
export function App() {
  const carditems = [
    {header:"Chapter 1", title:"Objectives", description:"Objectives of the study", buttontext:"View Scope and Delimitation"},
    {header:"Chapter 2", title:"Review of Related Literature", description:"Related Systems", buttontext:"Show More"},
    {header:"Chapter 3", title:"Methodology", description:"Method of Development", buttontext:"See Charts"}
  ]
  return (
    <>
    <h1>Hello World!</h1>
    {carditems.map(item=> (
          <Card
          header={item.header}
          title={item.title}
          description={item.description}
          buttontext={item.buttontext} >
          </Card>
        ) 
      )
    }
    </>
  )
}
export default App