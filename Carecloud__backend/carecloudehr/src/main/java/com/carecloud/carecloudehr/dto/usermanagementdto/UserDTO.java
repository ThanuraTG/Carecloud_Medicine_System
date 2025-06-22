package com.carecloud.carecloudehr.dto.usermanagementdto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDTO {
    private String username;
    private String password;
    private String repeatPassword;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private Long roleId;
    private boolean active;

}
