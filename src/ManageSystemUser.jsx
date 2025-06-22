import React, { useEffect, useState } from 'react';
import { deleteUser, getAllUsers, updateUser } from './patient/api'; // Adjust imports based on your API functions
import Header from './Components/Header';
import VerticalMenu from './Components/verticalmenu';
import './ManageSystemUser.css';


export default function ManageSyatemUser() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingUser, setEditingUser] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getAllUsers();
        setUsers(usersData);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleEditClick = (user) => {
    setEditingUser(user);
    setEditFormData({
      username: user.username,
      password: '', // Leave empty, only set if changing password
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      roleId: user.role ? user.role.id : '',
      active: user.active,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({
      ...editFormData,
      [name]: name === "active" ? value === "true" : value, // Convert "true"/"false" to boolean
    });
  };
  

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      // Prepare the payload, making sure roleId is a number
      const updatePayload = {
        ...editFormData,
        roleId: Number(editFormData.roleId), // Ensure roleId is a number
      };
  
      // Send the update request
      await updateUser(editingUser.id, updatePayload);
  
      // Update the user list and close the form
      setUsers(users.map(user => (user.id === editingUser.id ? { ...editingUser, ...updatePayload } : user)));
      setEditingUser(null);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
  

  const handleDelete = async (userId) => {
    try {
      await deleteUser(userId);
      setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  if (loading) return <p>Loading...</p>;
  return (
    <div className='Manage-user-list'>
        <VerticalMenu/>
        <Header/>
        <div className='box-Manage-users'>
          <div className ="header-Manage-users">
            <h2>STAFF</h2>
          </div>

          <div className='search-Manage-users'>
            <label htmlFor='search'>Search: </label>
            <input type='text' id='search' placeholder='Search Users..'/>
          </div>
          <main className='main_boxs'>
            <section className='box_bodys'>
                {users.length > 0 ? (
                <table className='Manage-users-table'>
                  <thead>
                    <tr>
                      <th>Username</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>Role</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map(user => (
                      <tr key={user.id}>
                        <td>{user.username}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.phoneNumber}</td>
                        <td>{user.role ? user.role.roleType : 'N/A'}</td>
                        <td>
                          <button onClick={() => handleEditClick(user)}>Update</button>
                          <button onClick={() => handleDelete(user.id)}>Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                ) : (
                  <p className="no-users">No users found</p>
                )}
            </section>
          </main>

          <div className='pagination-Manage-users'>
            <span> Showing 0 to 0 pf entire </span>

            <div className='button-Manage-users'>
             <button className='previous-button-Manage-users'>
               Previous
             </button>

            <button className='next-button-Manage-users'>
              Next
            </button>
            {editingUser && (
  <div className="edit-user-form-container">
    <h3>Edit User</h3>
    <form onSubmit={handleUpdateSubmit}>
      <label>Username:</label>
      <input
        type="text"
        name="username"
        value={editFormData.username}
        onChange={handleInputChange}
      />
      <label>Password:</label>
      <input
        type="password"
        name="password"
        value={editFormData.password}
        onChange={handleInputChange}
      />
      <label>First Name:</label>
      <input
        type="text"
        name="firstName"
        value={editFormData.firstName}
        onChange={handleInputChange}
      />
      <label>Last Name:</label>
      <input
        type="text"
        name="lastName"
        value={editFormData.lastName}
        onChange={handleInputChange}
      />
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={editFormData.email}
        onChange={handleInputChange}
      />
      <label>Phone Number:</label>
      <input
        type="text"
        name="phoneNumber"
        value={editFormData.phoneNumber}
        onChange={handleInputChange}
      />
      <label>Role:</label>
      <select
        name="roleId"
        value={editFormData.roleId || ''}
        onChange={handleInputChange}
      >
        <option value="">Select a role</option>
        <option value="1">ADMIN</option>
        <option value="2">STAFF</option>
        <option value="3">DOCTOR</option>
      </select>
      <label>Active:</label>
      <select
        name="active"
        value={editFormData.active}
        onChange={handleInputChange}
      >
        <option value={true}>Active</option>
        <option value={false}>Inactive</option>
      </select>
      <button type="submit">Save</button>
      <button type="button" onClick={() => setEditingUser(null)}>Cancel</button>
    </form>
  </div>
)}
            </div>
          </div>
        </div>
      
    </div>
  )
}

