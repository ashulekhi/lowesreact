import Item from "./Item"

function List(){
    var item1 = {
        name:"Choco truffle",
        price:500,
        image:"truffle.webp",
        tag:"Must Try"
    }
    var item2 = {
        name:"White truffle",
        price:600,
        image:"whitetruffle.jpeg",
        tag:"Best Seller"
    }
    var item3 = {
        name:"White truffle",
        price:600,
        image:"whitetruffle.jpeg"
    }
    return (
        <div>
            <h1>List Component</h1>
            <Item data={item1}  />
            <Item data={item2} />
            <Item data={item3} />
            
        </div>
    )
}

export default List