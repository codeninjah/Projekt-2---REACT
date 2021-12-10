import React, {useState} from 'react';
import AdminProducts from "./adminProducts"
import AdminUser from "./adminUser"
import AdminProduct from "./adminProduct"


enum AdminPanel {
  EDIT_PRODUCTS = 'edit',
  NEW_PRODUCT = 'new',
  NEW_USER = 'user',
  EDIT_USERS = "users"
}


export const AdminView = () => {
    const [inputValue, setInputValue] = useState<string>("")
    const [view, setView] = useState<AdminPanel>(AdminPanel.EDIT_PRODUCTS)
    let mode = null
    if (view === AdminPanel.EDIT_PRODUCTS) {
      mode = <AdminProducts inputValue={inputValue}/>
    } 
    else if (view === AdminPanel.NEW_PRODUCT) {
      mode = (<AdminProduct inputValue={inputValue}/>)
    }
    else if (view === AdminPanel.EDIT_USERS) {
      mode = <AdminUser inputValue={inputValue}/>
    }
    return (
      <>
        <div className="mainBar">
            <h2>Admin</h2>
            <button 
            data-test="edit-products-button"
            onClick={() => setView(AdminPanel.EDIT_PRODUCTS)}> Edit Products </button>
            <button
            data-test="edit-user-button"
            onClick={() => setView(AdminPanel.EDIT_USERS)}
            > Register User </button>
            <button
            data-test="new-product-button"
            onClick={() => setView(AdminPanel.NEW_PRODUCT)}
            > Register Product </button>
            <div className="inputContainer">
                <label htmlFor="">Search</label>
                <input 
                type="text"
                data-test="products-input"
                value={inputValue}
                onChange={(
                ev: React.ChangeEvent<HTMLInputElement>,
                ): void => setInputValue(ev.target.value)}
                />
            </div>
        </div>
        {
          mode
        }
      </>
    )
  }


  export default AdminView