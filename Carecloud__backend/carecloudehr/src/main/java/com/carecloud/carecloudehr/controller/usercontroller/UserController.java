package com.carecloud.carecloudehr.controller.usercontroller;

import com.carecloud.carecloudehr.dto.usermanagementdto.UserDTO;
import com.carecloud.carecloudehr.dto.usermanagementdto.UserResponseDTO;
import com.carecloud.carecloudehr.model.user.Role;
import com.carecloud.carecloudehr.model.user.User;
import com.carecloud.carecloudehr.service.audit.AuditLogService;
import com.carecloud.carecloudehr.service.user.RoleService;
import com.carecloud.carecloudehr.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private RoleService roleService;

    @Autowired
    private AuditLogService auditLogService;

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public ResponseEntity<?> createUser(@RequestBody UserDTO userDTO) {
        if (!userDTO.getPassword().equals(userDTO.getRepeatPassword())) {
            return ResponseEntity.badRequest().body("Passwords do not match");
        }

        // Find the role by ID
        Role role = roleService.findRoleById(userDTO.getRoleId());

        // Create and save the user
        User createdUser = userService.createUser(userDTO, role);

        auditLogService.logAction(
                getCurrentUsername(),
                getCurrentUserRole(),
                "CREATE_USER",
                "Created user: " + userDTO.getUsername()
        );

        // Prepare the response
        UserResponseDTO response = new UserResponseDTO();
        response.setId(createdUser.getId());
        response.setUsername(createdUser.getUsername());
        response.setFirstName(createdUser.getFirstName());
        response.setLastName(createdUser.getLastName());
        response.setEmail(createdUser.getEmail());
        response.setPhoneNumber(createdUser.getPhoneNumber());
        response.setRole(createdUser.getRole());
        response.setActive(createdUser.isActive());

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/{id}")
    public ResponseEntity<UserResponseDTO> updateUser(@PathVariable Long id, @RequestBody UserDTO userDTO) {
        User updatedUser = userService.updateUser(id, userDTO);

        auditLogService.logAction(
                getCurrentUsername(),
                getCurrentUserRole(),
                "UPDATE_USER",
                "Updated user with ID: " + id
        );

        UserResponseDTO response = new UserResponseDTO();
        response.setId(updatedUser.getId());
        response.setUsername(updatedUser.getUsername());
        response.setFirstName(updatedUser.getFirstName());
        response.setLastName(updatedUser.getLastName());
        response.setEmail(updatedUser.getEmail());
        response.setPhoneNumber(updatedUser.getPhoneNumber());
        response.setRole(updatedUser.getRole());
        response.setActive(updatedUser.isActive());
        return ResponseEntity.ok(response);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity <?> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);

        auditLogService.logAction(
                getCurrentUsername(),
                getCurrentUserRole(),
                "DELETE_USER",
                "Deleted user with ID: " + id
        );
        return ResponseEntity.ok("User deleted successfully");
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping
    public List<User> getAllUsers() {

        auditLogService.logAction(
                getCurrentUsername(),
                getCurrentUserRole(),
                "GET_ALL_USERS",
                "Get all user's details"
        );

        return userService.getAllUsers();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/{username}")
    public ResponseEntity <?> findByUsername(@PathVariable String username) {
        User user = userService.findByUsername(username);

        auditLogService.logAction(
                getCurrentUsername(),
                getCurrentUserRole(),
                "GET_USER_BY_NAME",
                "Get user with username: " + username
        );
        return ResponseEntity.ok(user);
    }

    // Helper methods to get the current user's username and role
    private String getCurrentUsername() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (principal instanceof org.springframework.security.core.userdetails.User) {
            return ((org.springframework.security.core.userdetails.User) principal).getUsername();
        } else if (principal instanceof String) {
            return (String) principal; // In some cases, the principal might still be a String
        } else {
            throw new IllegalStateException("Unexpected principal type: " + principal.getClass());
        }
    }


    private String getCurrentUserRole() {
        return SecurityContextHolder.getContext().getAuthentication().getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .findFirst()
                .orElse("UNKNOWN_ROLE");
    }
}
