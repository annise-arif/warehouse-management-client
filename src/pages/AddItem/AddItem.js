import React from 'react';

const AddItem = () => {
    const handleAddItem = (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const desc = event.target.desc.value;
        const price = event.target.price.value;
        const imgUrl = event.target.imgUrl.value;
        const data = {name, price, imgUrl, desc};
        // console.log(data)
        const url = `http://localhost:5000/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result);
        })
    }
    return (
        <div>
            <h1 className='py-3 text-info'>Add a item</h1>
            <form onSubmit={handleAddItem}>
                <input type="text" name="name" placeholder='Item Name' required />
                <br />
                <textarea cols="23" rows="2" className='mt-2' type="text" name="desc" placeholder='Description' required />
                <br />
                <input className='my-2' type="number" name="price" placeholder='add price' required />
                <br />
                <input className='mb-3' type="text" name='imgUrl' placeholder='Img Url' required />
                <br />
                <input className='btn btn-info text-light' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;