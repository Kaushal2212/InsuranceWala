package com.example.ins.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ins.Service.BuyPolicyService;
import com.example.ins.data.BuyPolicy;

@RestController
@RequestMapping("/buy")
public class BuyPolicyController {

	@Autowired
	private BuyPolicyService buyPolicyService;
	
	@PostMapping("")
    public ResponseEntity<?> buyPolicy(@RequestBody BuyPolicy buyPolicy) {
        return ResponseEntity.ok(this.buyPolicyService.buyPolicy(buyPolicy));
    }
}
