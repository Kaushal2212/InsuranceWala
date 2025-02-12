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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.ins.Service.ClientService;
import com.example.ins.data.Client;


@RestController
@RequestMapping("/clientapi")
public class ClientController {

	@Autowired
	private ClientService cs;
	
	@PostMapping("/create")
	public Client createClient(@RequestBody Client client) {
		return cs.createClient(client);
	}
	
	@GetMapping("/clients")
	public ResponseEntity<?> showClient(){
		return ResponseEntity.ok(this.cs.showClients());
	}
	
	@GetMapping("/getclient/{id}")
	public ResponseEntity<?> getClient(@PathVariable Integer id) throws Exception {
		return ResponseEntity.ok(this.cs.getClient(id));
	}
	
	@PutMapping("/updateclient/{id}") 
	public ResponseEntity<?> updateClient(@PathVariable Integer id, @RequestBody Client ct) throws Exception {
	return ResponseEntity.ok(this.cs.updateClient(id, ct));
	}
	
	@DeleteMapping("/deleteclient/{id}")
	public void deleteClient(@PathVariable Integer id) throws Exception {
		this.cs.deleteClient(id);
	}
	
	@PostMapping("/signin")
	public String signIn(@RequestParam("uName") String u, @RequestParam("uPassword") String p) {
		return cs.signIn(u, p);
	}
	
}
