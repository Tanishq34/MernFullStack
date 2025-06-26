import Child2 from "./Child2.jsx"

function Child1({ money, setMoney }) {
    console.log("one", money)
    return (
        <div>
            <Child2 money={money} setMoney={setMoney} />
        </div>)

}
export default Child1;