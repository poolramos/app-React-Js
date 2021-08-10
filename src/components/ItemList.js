import Item from "./Item";

const ItemList = ({items}) => {
    return ( 
        <div id="item-list">
            {items.map(item=>{
                return (
                    <Item key={item.id} item={item}/>
                )
            })}
        </div>
     );
}
 
export default ItemList;