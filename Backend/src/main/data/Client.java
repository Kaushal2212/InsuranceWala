package com.example.ins.data;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Client {
		@Id
		@Column(name="clientId")
		@GeneratedValue(strategy=GenerationType.IDENTITY)
		private int clientId;
		
		@Column(name="clientName")
		private String clientName;
		
		@Column(name="clientDateOfBirth")
		private String clientDateOfBirth;
		
		
		@Column(name="clientAddress")
		private String clientAddress;
		
		@Column(name="clientEmail")
		private String clientEmail;
		
		@Column(name="clientContactNo")
		private long clientContactNo;
		
		@Column(name="clientUserName", unique=true)
		private String uName;
		
		@Column(name="clientPassword")
		private String uPassword;
		

		public int getClientId() {
			return clientId;
		}

		public void setClientId(int clientId) {
			this.clientId = clientId;
		}

		public String getClientName() {
			return clientName;
		}

		public void setClientName(String clientName) {
			this.clientName = clientName;
		}

		public String getClientDateOfBirth() {
			return clientDateOfBirth;
		}

		public void setClientDateOfBirth(String clientDateOfBirth) {
			this.clientDateOfBirth = clientDateOfBirth;
		}

		public String getClientAddress() {
			return clientAddress;
		}

		public void setClientAddress(String clientAddress) {
			this.clientAddress = clientAddress;
		}

		public long getClientContactNo() {
			return clientContactNo;
		}

		public void setClientContactNo(long clientContactNo) {
			this.clientContactNo = clientContactNo;
		}

		public String getClientEmail() {
			return clientEmail;
		}

		public void setClientEmail(String clientEmail) {
			this.clientEmail = clientEmail;
		}

		public String getuName() {
			return uName;
		}

		public void setuName(String uName) {
			this.uName = uName;
		}

		public String getuPassword() {
			return uPassword;
		}

		public void setuPassword(String uPassword) {
			this.uPassword = uPassword;
		}

	
}
