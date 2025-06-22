package com.carecloud.carecloudehr.controller.usercontroller;

import com.carecloud.carecloudehr.config.usermanagement.JwtUtil;
import com.carecloud.carecloudehr.dto.usermanagementdto.AuthenticationRequest;
import com.carecloud.carecloudehr.dto.usermanagementdto.AuthenticationResponse;
import com.carecloud.carecloudehr.service.audit.AuditLogService;
import com.carecloud.carecloudehr.service.user.CustomUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private CustomUserDetailsService userDetailsService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AuditLogService auditLogService;

    @PostMapping("/login")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authRequest) throws Exception {
        System.out.println("Username: " + authRequest.getUsername());
        System.out.println("Password: " + authRequest.getPassword());
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword())
            );


        } catch (BadCredentialsException e) {
            System.out.println("Authentication failed for user: " + authRequest.getUsername());
            auditLogService.logAction(
                    authRequest.getUsername(),
                    "ADMIN",
                    "FAILED_LOGIN",
                    "Failed login attempt"
            );
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Incorrect Username or password");
        } catch (Exception e) {
            System.out.println("An error occurred: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred");
        }

        final UserDetails userDetails = userDetailsService.loadUserByUsername(authRequest.getUsername());
        final String jwt = jwtUtil.generateToken(userDetails.getUsername());


        auditLogService.logAction(
                authRequest.getUsername(),
                "ADMIN",
                "LOGIN",
                "User logged in successfully"
        );
        System.out.println("Generated JWT Token: " + jwt);

        return ResponseEntity.ok(new AuthenticationResponse(jwt));
    }
}
