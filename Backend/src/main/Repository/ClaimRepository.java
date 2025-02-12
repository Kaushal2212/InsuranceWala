package com.example.ins.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ins.data.Claim;

@Repository
public interface ClaimRepository extends JpaRepository<Claim,Integer>{

}
