package com.example.ins.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.example.ins.data.Client;
import com.example.ins.repository.ClientRepository;


@Service
public class ClientService {
			
		@Autowired
		private ClientRepository clr;
		
		public Client createClient(Client client) {
					return clr.save(client);
		} 
		
		public List<Client> showClients() {
			return this.clr.findAll();
		}
		
		public Client getClient(Integer id) throws Exception {
			Client ct =  this.clr.findById(id).orElse(null);
			if(ct==null) {
				throw new ResponseStatusException(HttpStatus.NOT_FOUND, "This id doesn't Exist");
			}
			return ct;
		}
		
		public Client updateClient(Integer id,Client ct) throws Exception {
			Client client =  this.clr.findById(id).orElse(null);
			if(client==null) {
				throw new ResponseStatusException(HttpStatus.NOT_FOUND, "This id doesn't Exist");
			}
			else {
				this.clr.save(client);
			}
				return client;
		}
		
		public void deleteClient(int id) {
			clr.deleteById(id);
		}
		
		public String signIn(String u, String p) {
		    List<Client> clients = clr.findAll();
		    for (Client client : clients) {
		        if (u.equals(client.getuName()) && p.equals(client.getuPassword())) {
		            return "Signed In. Client ID: " + client.getClientId();
		        }
		    }
		    return "Failed: Invalid username or password.";
		}
		



}
