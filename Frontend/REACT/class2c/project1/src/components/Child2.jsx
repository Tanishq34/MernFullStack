import Child3 from "./Child3.jsx";
function Child2({ money, setMoney }) {
    return (
        <div>
            <Child3 money={money} setMoney={setMoney} />
        </div>)


}
export default Child2;