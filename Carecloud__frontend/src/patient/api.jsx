import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080/api', // Backend URL
});
  
  //Add a request interceptor to add the JWT token to the Authorization header
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// Exporrt the user management API functions
// Create user function
export const AddUserModal = async (userData) => {
    try {
      console.log("Sending user data:", userData); // Debug
      const response = await api.post('/users', userData);
      console.log('User created successfully:',response.data);
      return response.data;
    } catch (error) {
      console.error('Error creating user:', error.response || error.message);
      throw error;
    }
};

// Update user function
export const updateUser = async (userId, updatedUser) => {
    try {
      const response = await api.put(`/users/${userId}`, updatedUser);
      return response.data;
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
};

// Delete user function
export const deleteUser = async (userId) => {
    try {
      const response = await api.delete(`/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
};
// Get user function
export const getAllUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
// Get audit function
export const getAllAuditLogs = async () => {
  try {
    const response = await api.get('/audit-logs');
    return response.data;
  } catch (error) {
    console.error('Error fetching audits:', error);
    throw error;
  }
};

export default api;


