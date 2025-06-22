package com.carecloud.carecloudehr.service.user;

import com.carecloud.carecloudehr.dto.usermanagementdto.UserDTO;
import com.carecloud.carecloudehr.model.user.Role;
import com.carecloud.carecloudehr.model.user.User;
import java.util.List;

public interface UserService {
    User createUser (UserDTO userDTO, Role role);
    User findByUsername(String username);
    User saveUser(User user);
    User updateUser(Long id, UserDTO userDTO);
    void deleteUser(Long id);
    List<User> getAllUsers();
}
