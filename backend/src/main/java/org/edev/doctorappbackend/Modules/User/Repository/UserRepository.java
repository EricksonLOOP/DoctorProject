package org.edev.doctorappbackend.Modules.User.Repository;

import org.edev.doctorappbackend.Modules.User.Entity.User;
import org.edev.doctorappbackend.Modules.User.Models.Role;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {
    Optional<User> findByEmail(String email);
    Page<User> findAllByRole(Role role, Pageable pageable);
}
