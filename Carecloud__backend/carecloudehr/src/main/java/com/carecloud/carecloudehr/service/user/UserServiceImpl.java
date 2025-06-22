package com.carecloud.carecloudehr.service.user;

import com.carecloud.carecloudehr.dto.usermanagementdto.UserDTO;
import com.carecloud.carecloudehr.model.user.Role;
import com.carecloud.carecloudehr.model.user.User;
import com.carecloud.carecloudehr.repository.user.RoleRepository;
import com.carecloud.carecloudehr.repository.user.UserRepository;
import com.carecloud.carecloudehr.service.audit.AuditLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired(required = false)
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private AuditLogService auditLogService;

    @Override
    public User createUser(UserDTO userDTO, Role role) {
        User user = new User();
        user.setUsername(userDTO.getUsername());
        user.setFirstName(userDTO.getFirstName());
        user.setLastName(userDTO.getLastName());
        user.setEmail(userDTO.getEmail());
        user.setRole(role);
        user.setPhoneNumber(userDTO.getPhoneNumber());

        // Hash the password before saving
        String encodedPassword = passwordEncoder.encode(userDTO.getPassword());
        user.setPassword(encodedPassword);
        user.setActive(true); // You can change this based on business logic


        User savedUser = userRepository.save(user);

        return savedUser;

    }

    @Override
    public User findByUsername(String username) {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User updateUser(Long id, UserDTO userDTO) {
        Optional<User> existingUserOptional = userRepository.findById(id);
        if (existingUserOptional.isPresent()) {
            User existingUser = existingUserOptional.get();
            existingUser.setUsername(userDTO.getUsername());

            // Check if the password has been changed, then hash it
            if (!existingUser.getPassword().equals(userDTO.getPassword())) {
                existingUser.setPassword(passwordEncoder.encode(userDTO.getPassword()));
            }
            existingUser.setFirstName(userDTO.getFirstName());
            existingUser.setLastName(userDTO.getLastName());
            existingUser.setEmail(userDTO.getEmail());
            existingUser.setPhoneNumber(userDTO.getPhoneNumber());
            existingUser.setActive(userDTO.isActive());

            // Retrieve the role by ID from the role repository
            Role role = roleRepository.findById(userDTO.getRoleId())
                    .orElseThrow(() -> new RuntimeException("Role not found"));
            existingUser.setRole(role);

            User updatedUser = userRepository.save(existingUser);


            return updatedUser;
        } else {
            throw new RuntimeException("User not found");
        }
    }

    @Override
    public void deleteUser(Long id) {
        Optional<User> userOptional = userRepository.findById(id);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            userRepository.deleteById(id);

        } else {
            throw new RuntimeException("User not found");
        }
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}

