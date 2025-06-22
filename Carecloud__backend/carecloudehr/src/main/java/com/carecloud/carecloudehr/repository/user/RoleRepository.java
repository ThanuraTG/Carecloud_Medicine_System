package com.carecloud.carecloudehr.repository.user;

import com.carecloud.carecloudehr.model.user.Role;
import com.carecloud.carecloudehr.model.user.RoleType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByRoleType (RoleType roleType);
}
