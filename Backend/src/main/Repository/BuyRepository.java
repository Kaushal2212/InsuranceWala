package com.example.ins.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ins.data.BuyPolicy;

@Repository
public interface BuyRepository extends JpaRepository<BuyPolicy,Integer>{

}
