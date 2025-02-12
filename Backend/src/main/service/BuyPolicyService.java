package com.example.ins.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ins.data.BuyPolicy;
import com.example.ins.repository.BuyRepository;

@Service
public class BuyPolicyService {
	
	@Autowired
	private BuyRepository br;
	
	public BuyPolicy buyPolicy(BuyPolicy buyPolicy) {
			return br.save(buyPolicy);
	}

}
