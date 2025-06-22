package com.carecloud.carecloudehr.dto.usermanagementdto;

import com.carecloud.carecloudehr.model.user.Role;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserResponseDTO {
    private Long id;
    private String username;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private Role role;
    private boolean active;
}

