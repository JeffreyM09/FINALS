import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [items, setItems] = useState([]);
    const [formData, setFormData] = useState({
        surname: '',
        first_name: '',
        middle_name: '',
        date_of_birth: '',
        place_of_birth: '',
        sex: '',
        contact_number: '',
        email: '',
        civil_status: 'Single',
        address: '',
        zip_code: '',
        sss_number: '',
        pag_ibig_number: '',
        blood_type: '',
        spouse_surname: '',
        spouse_first_name: '',
        spouse_middle_name: '',
        occupation: '',
        father_surname: '',
        father_first_name: '',
        father_middle_name: '',
        father_occupation: '',
    });
    const [editItemId, setEditItemId] = useState(null);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = () => {
        axios.get('http://127.0.0.1:8000/api/items/')
            .then(response => {
                setItems(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the items!', error);
            });
    };

    const handleAddItem = () => {
        axios.post('http://127.0.0.1:8000/api/items/', formData)
            .then(response => {
                fetchItems();
                setFormData({
                    surname: '',
                    first_name: '',
                    middle_name: '',
                    date_of_birth: '',
                    place_of_birth: '',
                    sex: '',
                    contact_number: '',
                    email: '',
                    civil_status: 'Single',
                    address: '',
                    zip_code: '',
                    sss_number: '',
                    pag_ibig_number: '',
                    blood_type: '',
                    spouse_surname: '',
                    spouse_first_name: '',
                    spouse_middle_name: '',
                    occupation: '',
                    father_surname: '',
                    father_first_name: '',
                    father_middle_name: '',
                    father_occupation: '',
                });
            })
            .catch(error => {
                console.error('There was an error adding the item!', error);
            });
    };

    const handleEditItem = (item) => {
        setEditItemId(item.id);
        setFormData({
            surname: item.surname,
            first_name: item.first_name,
            middle_name: item.middle_name,
            date_of_birth: item.date_of_birth,
            place_of_birth: item.place_of_birth,
            sex: item.sex,
            contact_number: item.contact_number,
            email: item.email,
            civil_status: item.civil_status,
            address: item.address,
            zip_code: item.zip_code,
            sss_number: item.sss_number,
            pag_ibig_number: item.pag_ibig_number,
            blood_type: item.blood_type,
            spouse_surname: item.spouse_surname,
            spouse_first_name: item.spouse_first_name,
            spouse_middle_name: item.spouse_middle_name,
            occupation: item.occupation,
            father_surname: item.father_surname,
            father_first_name: item.father_first_name,
            father_middle_name: item.father_middle_name,
            father_occupation: item.father_occupation,
        });
    };

    const handleUpdateItem = () => {
        axios.put(`http://127.0.0.1:8000/api/items/${editItemId}/`, formData)
            .then(response => {
                fetchItems();
                setEditItemId(null);
                setFormData({
                    surname: '',
                    first_name: '',
                    middle_name: '',
                    date_of_birth: '',
                    place_of_birth: '',
                    sex: '',
                    contact_number: '',
                    email: '',
                    civil_status: 'Single',
                    address: '',
                    zip_code: '',
                    sss_number: '',
                    pag_ibig_number: '',
                    blood_type: '',
                    spouse_surname: '',
                    spouse_first_name: '',
                    spouse_middle_name: '',
                    occupation: '',
                    father_surname: '',
                    father_first_name: '',
                    father_middle_name: '',
                    father_occupation: '',
                });
            })
            .catch(error => {
                console.error('There was an error updating the item!', error);
            });
    };

    const handleDeleteItem = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/items/${id}/`)
            .then(response => {
                fetchItems();
            })
            .catch(error => {
                console.error('There was an error deleting the item!', error);
            });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editItemId) {
            handleUpdateItem();
        } else {
            handleAddItem();
        }
    };

    return (
        <div className="App">
            <h1>FINAL EXAM
                
            </h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>SURNAME</label>
                    <input type="text" name="surname" value={formData.surname} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>FIRST NAME</label>
                    <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>MIDDLE NAME</label>
                    <input type="text" name="middle_name" value={formData.middle_name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>DATE OF BIRTH<br/>(mm/dd/yyyy)</label>
                    <input type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>PLACE OF BIRTH</label>
                    <input type="text" name="place_of_birth" value={formData.place_of_birth} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>SEX</label>
                    <input type="text" name="sex" value={formData.sex} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>CONTACT NUMBER</label>
                    <input type="text" name="contact_number" value={formData.contact_number} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>EMAIL</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>CIVIL STATUS</label>
                    <input type="text" name="civil_status" value={formData.civil_status} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>ADDRESS</label>
                    <textarea name="address" value={formData.address} onChange={handleChange}></textarea>
                </div>
                <div className="form-group">
                    <label>ZIP CODE</label>
                    <input type="text" name="zip_code" value={formData.zip_code} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>SSS NUMBER</label>
                    <input type="text" name="sss_number" value={formData.sss_number} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>PAG-IBIG NUMBER</label>
                    <input type="text" name="pag_ibig_number" value={formData.pag_ibig_number} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>BLOOD TYPE</label>
                    <input type="text" name="blood_type" value={formData.blood_type} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>SPOUSE SURNAME</label>
                    <input type="text" name="spouse_surname" value={formData.spouse_surname} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>SPOUSE FIRST NAME</label>
                    <input type="text" name="spouse_first_name" value={formData.spouse_first_name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>SPOUSE MIDDLE NAME</label>
                    <input type="text" name="spouse_middle_name" value={formData.spouse_middle_name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>OCCUPATION</label>
                    <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>FATHER SURNAME</label>
                    <input type="text" name="father_surname" value={formData.father_surname} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>FATHER FIRST NAME</label>
                    <input type="text" name="father_first_name" value={formData.father_first_name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>FATHER MIDDLE NAME</label>
                    <input type="text" name="father_middle_name" value={formData.father_middle_name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>FATHER OCCUPATION</label>
                    <input type="text" name="father_occupation" value={formData.father_occupation} onChange={handleChange} />
                </div>
                <button type="submit">{editItemId ? 'Update' : 'Add'} Item</button>
            </form>
            <div className="item-list">
                <h2>Items</h2>
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            {item.surname}, {item.first_name} {item.middle_name} - {item.date_of_birth} - {item.place_of_birth} - {item.sex} - {item.contact_number} - {item.email} - {item.civil_status} - {item.address} - {item.zip_code} - {item.sss_number} - {item.pag_ibig_number} - {item.blood_type} - {item.spouse_surname} - {item.spouse_first_name} - {item.spouse_middle_name} - {item.occupation} - {item.father_surname} - {item.father_first_name} - {item.father_middle_name} - {item.father_occupation}
                            <button onClick={() => handleEditItem(item)}>Edit</button>
                            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
