package com.example.ins.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ins.Service.ClaimService;
import com.example.ins.data.Claim;

@RestController
@RequestMapping("/claimapi")
public class ClaimController {

	@Autowired
	private ClaimService cs;
	
	@PostMapping("")
	public ResponseEntity<?> createClaim(@RequestBody Claim cm) {
		return ResponseEntity.ok(this.cs.createClaim(cm));
	}
	
	@GetMapping("/claims")
	public ResponseEntity<?> showClaims(){
		return ResponseEntity.ok(this.cs.showClaims());
	}
	
	@GetMapping("/getclaim/{id}")
	public ResponseEntity<?> getClaim(@PathVariable Integer id) throws Exception {
		return ResponseEntity.ok(this.cs.getClaim(id));
	}
	
	@PutMapping("/updateclaim/{id}") 
	public ResponseEntity<?> updateClaim(@PathVariable Integer id, @RequestBody Claim cm) throws Exception {
	return ResponseEntity.ok(this.cs.updateClaim(id, cm));
	}
	
	@DeleteMapping("/deleteclaim/{id}")
	public void deleteClaim(@PathVariable Integer id) throws Exception {
		this.cs.deleteClaim(id);
	}
}
