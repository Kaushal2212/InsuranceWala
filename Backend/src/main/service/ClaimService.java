package com.example.ins.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import com.example.ins.data.Claim;
import com.example.ins.repository.ClaimRepository;


@Service
public class ClaimService {
		
	@Autowired
	private ClaimRepository cr;
	
	public Claim createClaim(Claim cm) {
		this.cr.save(cm);
		return cm;
	} 
	
	public List<Claim> showClaims() {
		return this.cr.findAll();
	}
	
	public Claim getClaim(Integer id) throws Exception {
		Claim cm =  this.cr.findById(id).orElse(null);
		if(cm==null) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "This id doesn't Exist");
		}
		return cm;
	}
	
	public Claim updateClaim(Integer id,Claim cm) throws Exception {
		Claim claim =  this.cr.findById(id).orElse(null);
		if(claim==null) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "This id doesn't Exist");
		}
		else {
			this.cr.save(claim);
		}
			return claim;
	}
	
	public void deleteClaim(int id) {
		cr.deleteById(id);
	}
	
}
