package org.edev.doctorappbackend.Modules.History.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.ToString;
import org.edev.doctorappbackend.Modules.User.Entity.User;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.util.List;
import java.util.UUID;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class History {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    private String scheduledDate;
    private String initHour;
    private String finishHour;
    private UUID doctorId;
    @CreationTimestamp
    private LocalDateTime createdAt;
    @JsonIgnore
    @ToString.Exclude
    @ManyToMany
    @JoinTable(
            name = "user_history",
            joinColumns = @JoinColumn(name = "history_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    private List<User> users;
}

