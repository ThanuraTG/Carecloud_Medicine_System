package com.carecloud.carecloudehr.model.user;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "roles")

public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    @Setter
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(unique = true)
    @Getter
    @Setter
    private RoleType roleType;

    public Role() {}
}
