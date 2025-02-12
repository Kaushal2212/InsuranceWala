package com.example.ins.data;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;

@Entity
public class Claim {
		@Id
		@Column(name="claimId")
		@GeneratedValue(strategy=GenerationType.IDENTITY)
		private int claimId;
		
		@Column(name="claimNumber")
		@NotNull
		private long claimNumber;
		
		@Column(name="claimDescription")
		@NotNull
		private String claimDescription;
		
		@Column(name="claimDate")
		@NotNull
		private String claimDate;
		
		@Column(name="claimAmount")
		@NotNull
		private String claimAmount;
		
		private String clientId;
		
		
		public int getClaimId() {
			return claimId;
		}

		public void setClaimId(int claimId) {
			this.claimId = claimId;
		}

		public long getClaimNumber() {
			return claimNumber;
		}

		public void setClaimNumber(long claimNumber) {
			this.claimNumber = claimNumber;
		}

		public String getClaimDescription() {
			return claimDescription;
		}

		public void setClaimDescription(String claimDescription) {
			this.claimDescription = claimDescription;
		}

		public String getClaimDate() {
			return claimDate;
		}

		public void setClaimDate(String claimDate) {
			this.claimDate = claimDate;
		}

		public String getClaimAmount() {
			return claimAmount;
		}

		public void setClaimAmount(String claimAmount) {
			this.claimAmount = claimAmount;
		}

		public String getClientId() {
			return clientId;
		}

		public void setClientId(String clientId) {
			this.clientId = clientId;
		}

		
		
		
		

}
